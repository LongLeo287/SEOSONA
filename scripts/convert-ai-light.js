const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'components', 'sections', 'AiIntegration.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. AiIntegration wrapper
content = content.replace(/bg-\[#04091A\]/g, 'bg-transparent'); 
content = content.replace(/from-\[#1D4ED8\]\/20 via-\[#04091A\]\/0 to-transparent/g, 'from-[#1D4ED8]/10 via-transparent to-transparent');

// 2. Title & Texts in AiIntegration
content = content.replace(/text-white sm:text-4xl/g, 'text-[#04091A] sm:text-4xl');
content = content.replace(/text-slate-400 text-balance/g, 'text-slate-500 text-balance');

// 3. Feature Cards in AiIntegration
content = content.replace(/border-white\/10 bg-white\/5/g, 'border-slate-200 bg-white shadow-sm');
content = content.replace(/hover:border-\[#1D4ED8\]\/50 hover:bg-white\/10 hover:shadow-\[0_0_40px_rgba\(59,166,241,0.15\)\]/g, 'hover:border-[#1D4ED8]/30 hover:bg-blue-50 hover:shadow-[0_12px_40px_rgba(29,78,216,0.12)]');
content = content.replace(/bg-white\/10 shadow-\[0_0_40px_rgba\(59,166,241,0.2\)\]/g, 'bg-blue-50 border-[#1D4ED8]/30 shadow-[0_12px_40px_rgba(29,78,216,0.12)]');
content = content.replace(/text-white group-hover:text-\[#1D4ED8\]/g, 'text-[#04091A] group-hover:text-[#1D4ED8]');
content = content.replace(/'text-slate-400'/g, "'text-slate-500'");
content = content.replace(/shadow-inner ring-white\/5/g, 'ring-slate-100');

// 4. DataAutomationUI
content = content.replace(/bg-\[#0F172A\]/g, 'bg-white');
content = content.replace(/bg-\[#020617\]/g, 'bg-slate-50');
content = content.replace(/bg-\[#1E293B\]/g, 'bg-[#F1F3F4]');
content = content.replace(/border-slate-700\/50/g, 'border-slate-200');
content = content.replace(/border-slate-700/g, 'border-slate-200');
content = content.replace(/border-slate-800/g, 'border-slate-200');
content = content.replace(/text-slate-300/g, 'text-slate-600');
content = content.replace(/text-slate-400/g, 'text-slate-500');
content = content.replace(/text-white/g, 'text-slate-800'); // Some headings
content = content.replace(/hover:bg-white\/5/g, 'hover:bg-slate-100');
content = content.replace(/hover:text-slate-200/g, 'hover:text-slate-800');
content = content.replace(/bg-\[#020617\]\/50/g, 'bg-white/80');

// 5. ContentUI 
content = content.replace(/bg-\[#1E1E1E\]/g, 'bg-white');
content = content.replace(/bg-\[#2D2D2D\]/g, 'bg-slate-50');
content = content.replace(/bg-\[#3D3D3D\]/g, 'bg-slate-200');
content = content.replace(/border-\[#333\]/g, 'border-slate-200');
content = content.replace(/border-\[#444\]/g, 'border-slate-200');
content = content.replace(/bg-\[#2F2F2F\]/g, 'bg-[#F0F6FF]');

// 6. Sonatools CTA (Fixing the bug from earlier)
content = content.replace(/bg-\[#0B1530\]/g, 'bg-white');
content = content.replace(/hover:bg-\[#111F45\]/g, 'hover:border-[#1D4ED8] hover:text-[#1D4ED8]');
content = content.replace(/text-white transition-all/g, 'text-[#04091A] transition-all');

fs.writeFileSync(file, content, 'utf8');
console.log('AiIntegration converted to Light Mode safely');
