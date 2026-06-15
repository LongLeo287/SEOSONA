const axios = require('axios');
const TurndownService = require('turndown');
const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const WP_API_URL = 'https://seosona.com/wp-json/wp/v2';
const POSTS_DIR = path.join(__dirname, '../content/blog');
const PAGES_DIR = path.join(__dirname, '../content/pages');
const IMAGES_DIR = path.join(__dirname, '../public/images/blog');

// Ensure directories exist
[POSTS_DIR, PAGES_DIR, IMAGES_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

// Skip these pages because we already have React components for them
const SKIPPED_PAGES = [
  'dich-vu-seo', 'dao-tao-seo', 'bao-gia-seo', 'lien-he', 'tuyen-dung',
  've-seosona', 'google-ads', 'tu-van-seo-chuyen-sau', 'khoa-hoc-seo',
  'khoa-hoc-content-seo', 'chi-quyet-academy', 'case-study'
];

async function downloadImage(url, slug) {
  try {
    const ext = path.extname(new URL(url).pathname) || '.jpg';
    const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 8);
    const fileName = `${slug}-${hash}${ext}`;
    const filePath = path.join(IMAGES_DIR, fileName);
    
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
    return url;
  }
}

async function processHtmlImages(html, slug) {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  let match;
  const urlsToReplace = [];

  while ((match = imgRegex.exec(html)) !== null) {
    urlsToReplace.push(match[1]);
  }

  let processedHtml = html;
  for (const url of urlsToReplace) {
    if (url.includes('seosona.com/wp-content/uploads/')) {
      const newLocalPath = await downloadImage(url, slug);
      processedHtml = processedHtml.replace(new RegExp(url, 'g'), newLocalPath);
    }
  }

  return processedHtml;
}

function decodeHtmlEntities(text) {
  if (!text) return '';
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
  } catch {
    // console.error(`  Failed to fetch featured media`);
  }
  return null;
}

async function getCategoriesMap() {
  console.log('Fetching Categories...');
  const response = await axiosInstance.get(`${WP_API_URL}/categories?per_page=100`);
  const map = {};
  for (const cat of response.data) {
    map[cat.id] = cat.slug;
  }
  return map;
}

async function migratePosts(categoriesMap) {
  console.log('Starting Posts Migration...');
  let page = 1;
  let totalPages = 1;
  let totalPosts = 0;

  do {
    console.log(`Fetching posts page ${page}...`);
    try {
      const response = await axiosInstance.get(`${WP_API_URL}/posts?per_page=100&page=${page}`);
      if (page === 1) totalPages = parseInt(response.headers['x-wp-totalpages'], 10) || 1;

      for (const post of response.data) {
        console.log(`Processing Post: ${post.slug}`);
        
        const title = decodeHtmlEntities(post.title.rendered);
        const excerpt = decodeHtmlEntities(turndownService.turndown(post.excerpt.rendered).replace(/\n/g, ' '));
        
        let coverImage = '';
        const featuredMediaUrl = await fetchFeaturedImage(post);
        if (featuredMediaUrl) coverImage = await downloadImage(featuredMediaUrl, post.slug);

        let rawHtml = post.content.rendered;
        rawHtml = await processHtmlImages(rawHtml, post.slug);
        const markdown = turndownService.turndown(rawHtml);

        // Map Category ID to Slug
        let categorySlug = 'tong-hop'; // default fallback
        if (post.categories && post.categories.length > 0) {
          const firstCatId = post.categories[0];
          if (categoriesMap[firstCatId]) {
            categorySlug = categoriesMap[firstCatId];
          }
        }

        const mdxContent = `---
title: "${title.replace(/"/g, '\\"')}"
slug: "${post.slug}"
date: "${post.date}"
categorySlug: "${categorySlug}"
coverImage: "${coverImage}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
---

${markdown}
`;
        fs.writeFileSync(path.join(POSTS_DIR, `${post.slug}.mdx`), mdxContent);
        totalPosts++;
      }
      page++;
    } catch (err) {
      console.error(`Error fetching posts page ${page}:`, err.message);
      break;
    }
  } while (page <= totalPages);
  console.log(`Migrated ${totalPosts} posts.`);
}

async function migratePages() {
  console.log('Starting Pages Migration...');
  let page = 1;
  let totalPages = 1;
  let totalMigrated = 0;

  do {
    console.log(`Fetching pages page ${page}...`);
    try {
      const response = await axiosInstance.get(`${WP_API_URL}/pages?per_page=100&page=${page}`);
      if (page === 1) totalPages = parseInt(response.headers['x-wp-totalpages'], 10) || 1;

      for (const p of response.data) {
        if (SKIPPED_PAGES.includes(p.slug)) {
          console.log(`Skipping Page: ${p.slug} (React component exists)`);
          continue;
        }

        console.log(`Processing Page: ${p.slug}`);
        const title = decodeHtmlEntities(p.title.rendered);
        
        let coverImage = '';
        const featuredMediaUrl = await fetchFeaturedImage(p);
        if (featuredMediaUrl) coverImage = await downloadImage(featuredMediaUrl, p.slug);

        let rawHtml = p.content.rendered;
        rawHtml = await processHtmlImages(rawHtml, p.slug);
        const markdown = turndownService.turndown(rawHtml);

        const mdxContent = `---
title: "${title.replace(/"/g, '\\"')}"
slug: "${p.slug}"
date: "${p.date}"
coverImage: "${coverImage}"
---

${markdown}
`;
        fs.writeFileSync(path.join(PAGES_DIR, `${p.slug}.mdx`), mdxContent);
        totalMigrated++;
      }
      page++;
    } catch (err) {
      console.error(`Error fetching pages page ${page}:`, err.message);
      break;
    }
  } while (page <= totalPages);
  console.log(`Migrated ${totalMigrated} pages.`);
}

async function run() {
  const categoriesMap = await getCategoriesMap();
  await migratePosts(categoriesMap);
  await migratePages();
  console.log('ALL DONE!');
}

run();
