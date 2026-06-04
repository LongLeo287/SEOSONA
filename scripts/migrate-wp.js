const axios = require('axios');
const TurndownService = require('turndown');
const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const WP_API_URL = 'https://seosona.com/wp-json/wp/v2';
const CONTENT_DIR = path.join(__dirname, '../content/blog');
const IMAGES_DIR = path.join(__dirname, '../public/images/blog');

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

// Configure Axios to ignore SSL cert errors if any, just in case
const axiosInstance = axios.create({
  httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

async function downloadImage(url, slug) {
  try {
    const ext = path.extname(new URL(url).pathname) || '.jpg';
    // Generate a short hash to avoid long messy names
    const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 8);
    const fileName = `${slug}-${hash}${ext}`;
    const filePath = path.join(IMAGES_DIR, fileName);
    
    // Don't download if it already exists
    if (fs.existsSync(filePath)) {
      return `/images/blog/${fileName}`;
    }

    console.log(`  Downloading image: ${url}`);
    const response = await axiosInstance({
      url,
      method: 'GET',
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => resolve(`/images/blog/${fileName}`));
      writer.on('error', reject);
    });
  } catch (err) {
    console.error(`  Failed to download image ${url}: ${err.message}`);
    return url; // return original URL if failed
  }
}

async function processHtmlImages(html, slug) {
  // Simple regex to match <img ... src="URL" ...>
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  let match;
  const urlsToReplace = [];

  while ((match = imgRegex.exec(html)) !== null) {
    urlsToReplace.push(match[1]);
  }

  let processedHtml = html;
  for (const url of urlsToReplace) {
    // Only download if it's a seosona.com upload
    if (url.includes('seosona.com/wp-content/uploads/')) {
      const newLocalPath = await downloadImage(url, slug);
      processedHtml = processedHtml.replace(new RegExp(url, 'g'), newLocalPath);
    }
  }

  return processedHtml;
}

function decodeHtmlEntities(text) {
  return text.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
             .replace(/&amp;/g, '&')
             .replace(/&lt;/g, '<')
             .replace(/&gt;/g, '>')
             .replace(/&quot;/g, '"')
             .replace(/&#8211;/g, '-')
             .replace(/&#8212;/g, '--')
             .replace(/&#8216;/g, "'")
             .replace(/&#8217;/g, "'")
             .replace(/&#8220;/g, '"')
             .replace(/&#8221;/g, '"');
}

async function fetchFeaturedImage(post) {
  try {
    if (post._links && post._links['wp:featuredmedia']) {
      const mediaUrl = post._links['wp:featuredmedia'][0].href;
      const response = await axiosInstance.get(mediaUrl);
      if (response.data && response.data.source_url) {
        return response.data.source_url;
      }
    }
  } catch (err) {
    console.error(`  Failed to fetch featured media for post ${post.id}`);
  }
  return null;
}

async function migratePosts() {
  console.log('Starting WP Migration...');
  
  let page = 1;
  let totalPages = 1;
  let totalPosts = 0;

  do {
    console.log(`Fetching page ${page}...`);
    try {
      const response = await axiosInstance.get(`${WP_API_URL}/posts?per_page=100&page=${page}`);
      
      if (page === 1) {
        totalPages = parseInt(response.headers['x-wp-totalpages'], 10) || 1;
      }

      const posts = response.data;
      console.log(`Found ${posts.length} posts on page ${page}`);

      for (const post of posts) {
        console.log(`Processing: ${post.slug}`);
        
        // 1. Get Metadata
        const title = decodeHtmlEntities(post.title.rendered);
        const date = post.date;
        const excerptHtml = post.excerpt.rendered;
        const excerpt = decodeHtmlEntities(turndownService.turndown(excerptHtml).replace(/\n/g, ' '));
        
        // 2. Fetch and download featured image
        let coverImage = '';
        const featuredMediaUrl = await fetchFeaturedImage(post);
        if (featuredMediaUrl) {
          coverImage = await downloadImage(featuredMediaUrl, post.slug);
        }

        // 3. Process Content & Images
        let rawHtml = post.content.rendered;
        rawHtml = await processHtmlImages(rawHtml, post.slug);
        
        // 4. Convert to Markdown
        const markdown = turndownService.turndown(rawHtml);

        // 5. Build MDX file content
        const mdxContent = `---
title: "${title.replace(/"/g, '\\"')}"
slug: "${post.slug}"
date: "${date}"
coverImage: "${coverImage}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
---

${markdown}
`;

        // 6. Save file
        fs.writeFileSync(path.join(CONTENT_DIR, `${post.slug}.mdx`), mdxContent);
        totalPosts++;
      }

      page++;
    } catch (err) {
      console.error(`Error fetching page ${page}:`, err.message);
      break;
    }
  } while (page <= totalPages);

  console.log(`Migration completed! Successfully migrated ${totalPosts} posts.`);
}

migratePosts();
