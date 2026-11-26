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
  const ic = el('span', 'card-ico'); ic.dataset.icon = ({web:'globe',security:'shield',data:'chart'})[p.cat] || 'wrench'; c.append(ic);
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
const skillIcons = { 'Languages':'code','Frontend':'layout','Backend and APIs':'server','Databases and tooling':'db','Networking and security':'shield','Other':'chip' };
skills.forEach(([k, v]) => { const d = el('div'); const dt = el('dt'); const i = el('i'); i.dataset.icon = skillIcons[k] || 'spark'; dt.append(i, document.createTextNode(k)); d.append(dt, el('dd', '', v)); sl.append(d); });
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

const P = {
  network:'<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4M12 11.5l-5.5 5.5M12 11.5l5.5 5.5"/>',
  code:'<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
  shield:'<path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
  folder:'<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>',
  spark:'<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>',
  cap:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>',
  rocket:'<path d="M5 19c0-3 1-4 3-5M14 4c4 0 6 2 6 6-2 4-5 6-8 7l-5-5c1-3 3-6 7-8z"/><circle cx="14.5" cy="9.5" r="1.5"/>',
  github:'<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5a3 3 0 00-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 00-1.3-3.2 4.3 4.3 0 00-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 00-6 0C6.5 2.5 5.5 2.8 5.5 2.800a4.3 4.3 0 00-.1 3.200A4.6 4.6 0 004 9.200c0 4.7 2.8 5.7 5.5 6A3 3 0 008.7 17.500V21"/>',
  linkedin:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v5M8 8v.01M12 16v-5M12 13c0-3 5-3 5 0v3"/>',
  whatsapp:'<path d="M3 21l1.7-5A8.5 8.5 0 1112 20.500a8.5 8.5 0 01-4-1z"/><path d="M9 9c0 3 3 6 6 6l1-2-2-1-1 1c-1-.5-2-1.5-2.5-2.500l1-1-1-2z"/>',
  cert:'<circle cx="12" cy="9" r="5"/><path d="M9 13.500L7 21l5-3 5 3-2-7.5"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
  wrench:'<path d="M14 6a4 4 0 005 5l-8 8a2.8 2.8 0 01-4-4z"/>',
  layout:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 10v10"/>',
  server:'<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.500v.01M7 16.500v.01"/>',
  db:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  chip:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>'
};
document.querySelectorAll('[data-icon]').forEach(n => {
  const d = P[n.dataset.icon]; if (!d) return;
  n.classList.add('ico');
  n.innerHTML = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
});
document.documentElement.classList.add('js');
const fallbackReveal = () => document.querySelectorAll('.reveal:not(.in)').forEach(n => { const r = n.getBoundingClientRect(); if (r.top < innerHeight) n.classList.add('in'); });
setTimeout(fallbackReveal, 1200);
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.08 }) : null;
document.querySelectorAll('main section > *, .card, .skills > div, .band p').forEach((n, i) => {
  if (!io) return;
  n.classList.add('reveal'); n.style.setProperty('--d', ((i % 4) * 70) + 'ms'); io.observe(n);
});
