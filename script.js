const projects = [
  { name: 'MediTrust Core', cat: 'web', stack: ['PHP', 'MySQL', 'QR', 'Auth'], text: 'Graduation web app with an admin dashboard and QR scanning for authenticated medical tracking. Includes an expert system that recommends drug excipients, with a 3D model viewer.' },
  { name: 'Dynamic QR Generator', cat: 'web', stack: ['Next.js', 'React', 'Tailwind'], text: 'Deployed on Vercel. Links, Wi-Fi, email and vCard QR codes with live preview, branding controls, WCAG contrast warnings, logo upload, PNG/SVG export and local history.' },
  { name: 'Websites Security Checker', cat: 'security', stack: ['Python', 'Networking'], text: 'Scans sites for missing security headers (CSP, HSTS, X-Frame-Options), weak TLS/SSL, exposed directories and basic XSS/SQLi surface, then writes a diagnostic report.' },
  { name: 'BugsBunny', cat: 'security', stack: ['Raspberry Pi', 'Linux'], text: 'Second-year graduation project: a Raspberry Pi hardware bridge linking sensors to a Windows control environment, with AI-driven attack simulation and a lightweight network-auditing node. Team project supervised by Dr. Radwa Radi.' },
  { name: 'Cyber Security Roadmap', cat: 'security', stack: ['InfoSec', 'UI/UX'], text: 'Interactive 30-week, 7-phase roadmap from zero to a first security role, with terminal-style elements.' },
  { name: 'Data Analysis for Small Companies', cat: 'data', stack: ['Python', 'SQL'], text: 'Data visualization and analysis suite for tracking metrics and generating insights for small businesses.' },
  { name: 'Atmospheric Data App', cat: 'data', stack: ['REST API', 'Async'], text: 'Weather app consuming real-time data, paired with a data-analysis sorting tool.' },
  { name: 'Asma Allah Al-Husna', cat: 'web', stack: ['Vanilla JS', 'html2canvas'], text: 'Interactive 3D solar-system and galaxy UI built in pure CSS and JS, with a journey map and a canvas image generator for sharing.' },
  { name: 'Student Management System', cat: 'data', stack: ['Java', 'SQL'], text: 'Student management system with deep database structures and dynamic reporting.' }
];
const wip = [
  { name: 'Smart Study Planner', status: '65%', stack: ['NestJS', 'PostgreSQL', 'Prisma', 'pnpm'], text: '23-endpoint REST API with a three-phase scheduler: weighted priority scoring, SM-2 spaced repetition and greedy slot assignment.' },
  { name: 'Fresh Produce Delivery', status: '50%', stack: ['React', 'Vite', 'TypeScript', 'NestJS', 'PostgreSQL'], text: 'Single-vendor delivery storefront for a real store in Alexandria. Not a marketplace.' }
];
const skills = [
  ['Languages', 'JavaScript, TypeScript, Python, Java, C, C++, PHP, SQL'],
  ['Frontend', 'HTML5, CSS3, React, Next.js, Tailwind CSS, Vite, Three.js'],
  ['Backend and APIs', 'Node.js, NestJS, REST APIs'],
  ['Databases and tooling', 'MySQL, PostgreSQL, Prisma, Git/GitHub, Docker'],
  ['Networking and security', 'Subnetting, routing and switching, Linux administration, Cisco concepts, vulnerability simulation basics'],
  ['Other', 'Raspberry Pi integration, VS Code, Notion for project scheduling']
];
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h !== undefined) e.textContent = h; return e; };
function card(p) {
  const c = el('article', 'card'); c.dataset.cat = p.cat || '';
  c.append(el('h3', '', p.name));
  if (p.status) c.append(el('span', 'status', p.status + ' complete'));
  c.append(el('p', '', p.text));
  const t = el('div', 'tags'); p.stack.forEach(s => t.append(el('span', '', s))); c.append(t);
  return c;
}
const grid = document.getElementById('grid');
projects.forEach(p => grid.append(card(p)));
wip.forEach(p => document.getElementById('wip').append(card(p)));
const sl = document.getElementById('skillList');
skills.forEach(([k, v]) => { const d = el('div'); d.append(el('dt', '', k), el('dd', '', v)); sl.append(d); });
document.querySelectorAll('.chip').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', x === b));
  const f = b.dataset.filter;
  grid.querySelectorAll('.card').forEach(c => { c.hidden = !(f === 'all' || c.dataset.cat === f); });
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('img[data-asset]').forEach(img => {
  const use = () => { const src = window.ASSETS && window.ASSETS[img.dataset.asset]; if (src && img.src !== src) img.src = src; else img.parentNode.classList.add('empty'); };
  img.addEventListener('error', use, { once: true });
  if (img.complete && img.naturalWidth === 0) use();
});
const fav = document.getElementById('favicon');
if (fav) { const t = new Image(); t.onerror = () => { if (window.ASSETS) fav.href = window.ASSETS.favicon; }; t.src = fav.href; }
