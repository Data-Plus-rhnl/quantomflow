const fs = require('fs');
const path = require('path');

const imageOptions = [
  {
    id: '01',
    name: 'Cobalt & Frosted Glass Fluid Knot',
    file: '/decorations/option1-luxury-glass-knot.jpg',
    tag: 'Apple / Cinema 4D Render',
    desc: 'Weightless 3D sculptural knot crafted from frosted refractive optical glass intertwined with liquid polished royal cobalt chrome (#1D63FF). Deep luxury studio reflections.'
  },
  {
    id: '02',
    name: 'Architectural Prism Glass Sculpture',
    file: '/decorations/option2-abstract-glass.jpg',
    tag: 'Linear / Modernist',
    desc: 'Pure optical glass faceted structure with caustics and deep cobalt reflections. Gives an ultra-premium executive agency aesthetic.'
  },
  {
    id: '03',
    name: 'Spatial Frosted Fluid Shapes',
    file: '/decorations/option3-glass-shapes.jpg',
    tag: 'VisionOS Spatial',
    desc: 'Translucent floating geometric glass lenses with soft caustic illumination and specular rim reflections.'
  },
  {
    id: '04',
    name: 'Organic Metallic Flow Curves',
    file: '/decorations/option4-flow-curves.jpg',
    tag: 'Stripe Fluid Flow',
    desc: 'Sweeping liquid cobalt blue chrome waves curving smoothly through dark space. Dynamic velocity and continuous motion.'
  },
  {
    id: '05',
    name: 'Cybernetic Tech Monolith Grid',
    file: '/decorations/option5-tech-grid.jpg',
    tag: 'Supabase / Cyber Tech',
    desc: '3D architectural perspective grid with radiant laser-lit geometric solids and horizon glow.'
  },
  {
    id: '06',
    name: 'Precision Hardware Tech Totems',
    file: '/decorations/option6-tech-objects.jpg',
    tag: 'Teenage Tech / Raycast',
    desc: 'Curated 3D minimalist tech gadgets and hardware tokens with high-contrast studio rim lighting.'
  },
  {
    id: '07',
    name: 'Ambient Architectural Light Caustics',
    file: '/decorations/option07-architectural-shadows.jpg',
    tag: 'Architectural Ambient',
    desc: 'Soft architectural glass refraction and ambient shadow cast across deep navy space. Subtly eliminates background plainness.'
  },
  {
    id: '08',
    name: 'Organic Silk Waves & Dunes',
    file: '/decorations/option08-organic-silk-dunes.jpg',
    tag: 'Luxury Silk Flow',
    desc: 'Silky tactile undulating fabric ribbons flowing diagonally with velvety cobalt sheen.'
  },
  {
    id: '09',
    name: 'Floating Geometric Spheres & Halos',
    file: '/decorations/option09-page-bg-objects.jpg',
    tag: 'Minimal Spheres',
    desc: 'Weightless floating metallic orbs and precision halo rings distributed gracefully in perspective.'
  },
  {
    id: '10',
    name: 'Glassmorphic Spatial UI Tablets',
    file: '/decorations/option10-glassmorphic-objects.jpg',
    tag: 'VisionOS UI Glass',
    desc: 'Layered frosted glass slates with luminous glowing cobalt edges floating in volumetric depth.'
  },
  {
    id: '11',
    name: 'Continuous Liquid Cobalt Stream',
    file: '/decorations/option11-liquid-flow-layout.jpg',
    tag: 'Liquid Metal Stream',
    desc: 'Dynamic fluid cobalt stream winding across the layout like liquid mercury.'
  },
  {
    id: '12',
    name: 'Monumental Kinetic Sculpture',
    file: '/decorations/option12-architectural-sculpture.jpg',
    tag: 'Monumental 3D',
    desc: 'Large-scale museum-grade tech sculpture combining brushed steel, titanium, and cobalt glass.'
  },
  {
    id: '13',
    name: 'Modernist Gyroscopic Spheres',
    file: '/decorations/option13-real-objects.jpg',
    tag: 'Modernist Industrial',
    desc: 'Minimalist physical 3D elements, orbital gyroscopes, and polished metallic tokens.'
  },
  {
    id: '14',
    name: 'Iridescent Polyhedral Crystals',
    file: '/decorations/option14-uncommon-options.jpg',
    tag: 'Uncommon Prisms',
    desc: 'Rare multi-faceted crystalline gems refracting violet, cyan, and deep cobalt highlights.'
  },
  {
    id: '15',
    name: 'Atmospheric Shadow Veil',
    file: '/decorations/option15-minimal-shadows.jpg',
    tag: 'Subtle Shadow Veil',
    desc: 'Ultra-subtle ambient shadow texture giving the background a warm, tactile, high-end editorial feel.'
  }
];

const htmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>QuantumFlow — 15 Luxury 3D Decorative Images for Portfolio Background</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --font-main: 'Plus Jakarta Sans', -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      --primary: #1D63FF;
      --primary-hover: #1550DB;
      --primary-subtle: rgba(29, 99, 255, 0.15);
      
      /* Dark Theme */
      --bg-base: #070B16;
      --bg-surface: #0E1626;
      --bg-card: rgba(16, 25, 44, 0.9);
      --bg-card-hover: rgba(24, 38, 66, 1);
      --border-subtle: rgba(255, 255, 255, 0.09);
      --border-accent: rgba(29, 99, 255, 0.45);
      --text-main: #FFFFFF;
      --text-muted: #94A3B8;
      --text-faint: #64748B;
      --badge-bg: rgba(29, 99, 255, 0.18);
      --badge-text: #60A5FA;
    }

    [data-theme="light"] {
      --bg-base: #F8FAFC;
      --bg-surface: #FFFFFF;
      --bg-card: #FFFFFF;
      --bg-card-hover: #F1F5F9;
      --border-subtle: #E2E8F0;
      --border-accent: rgba(29, 99, 255, 0.5);
      --text-main: #0F172A;
      --text-muted: #475569;
      --text-faint: #94A3B8;
      --badge-bg: #EFF6FF;
      --badge-text: #1D63FF;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
    }

    body {
      font-family: var(--font-main);
      background: var(--bg-base);
      color: var(--text-main);
      min-height: 100vh;
      padding-bottom: 140px;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border-subtle);
      padding: 16px 36px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .brand-logo {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: linear-gradient(135deg, #1D63FF, #06B6D4);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 800;
      font-size: 18px;
      box-shadow: 0 4px 14px rgba(29, 99, 255, 0.35);
    }

    .brand-title {
      font-size: 18px;
      font-weight: 800;
      letter-spacing: -0.01em;
    }

    .brand-sub {
      font-size: 12px;
      color: var(--text-muted);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid var(--border-subtle);
      background: var(--bg-card);
      color: var(--text-main);
    }

    .btn:hover {
      border-color: var(--primary);
    }

    .btn-primary {
      background: var(--primary);
      color: #FFFFFF;
      border-color: var(--primary);
    }

    .btn-primary:hover {
      background: var(--primary-hover);
    }

    /* Live In-Page Section Mockup */
    .bg-demo-section {
      max-width: 1400px;
      margin: 24px auto 0;
      padding: 0 36px;
    }

    .bg-demo-box {
      position: relative;
      background: var(--bg-surface);
      border: 1px solid var(--border-accent);
      border-radius: 24px;
      padding: 50px 54px;
      overflow: hidden;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
      min-height: 360px;
      display: flex;
      align-items: center;
    }

    /* Floating 3D Render Image Injected Here */
    .bg-image-layer {
      position: absolute;
      top: 50%;
      right: 30px;
      transform: translateY(-50%);
      width: 400px;
      height: 400px;
      pointer-events: none;
      z-index: 1;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
      transition: all 0.35s ease;
      mask-image: radial-gradient(circle, black 65%, transparent 95%);
      -webkit-mask-image: radial-gradient(circle, black 65%, transparent 95%);
    }

    .bg-image-layer img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Foreground Content of Mock Section */
    .bg-demo-content {
      position: relative;
      z-index: 2;
      max-width: 620px;
    }

    .demo-tag {
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--primary);
      background: var(--badge-bg);
      padding: 5px 14px;
      border-radius: 999px;
      display: inline-block;
      margin-bottom: 14px;
    }

    .demo-title {
      font-size: 32px;
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 12px;
      letter-spacing: -0.02em;
    }

    .demo-desc {
      font-size: 15px;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 26px;
    }

    .demo-cards-row {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .demo-mini-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 14px 18px;
      font-size: 13px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.1);
    }

    .demo-mini-card span {
      color: var(--primary);
      font-size: 16px;
    }

    .bg-demo-helper {
      position: absolute;
      bottom: 16px;
      left: 54px;
      z-index: 3;
      font-size: 12px;
      color: var(--text-faint);
      font-family: var(--font-mono);
    }

    /* Gallery Title */
    .section-header {
      max-width: 1400px;
      margin: 36px auto 18px;
      padding: 0 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    .section-header h3 {
      font-size: 22px;
      font-weight: 800;
    }

    .section-header p {
      font-size: 13.5px;
      color: var(--text-muted);
    }

    /* Grid */
    .decorations-grid {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 36px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 28px;
    }

    .card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 18px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
      transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .card:hover {
      transform: translateY(-6px);
      border-color: var(--border-accent);
      box-shadow: 0 16px 36px rgba(29, 99, 255, 0.22);
    }

    .card.selected {
      border: 2px solid var(--primary);
      background: var(--bg-card-hover);
      box-shadow: 0 0 0 4px var(--primary-subtle), 0 18px 44px rgba(29, 99, 255, 0.32);
    }

    .card-header {
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border-subtle);
    }

    .card-id {
      font-family: var(--font-mono);
      font-size: 14px;
      font-weight: 700;
      color: var(--primary);
      background: var(--badge-bg);
      padding: 4px 10px;
      border-radius: 6px;
    }

    .card-tag {
      font-size: 11px;
      font-weight: 700;
      color: var(--text-faint);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .check-circle {
      width: 24px;
      height: 24px;
      border-radius: 6px;
      border: 2px solid var(--border-subtle);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: white;
      font-weight: 700;
    }

    .card.selected .check-circle {
      background: var(--primary);
      border-color: var(--primary);
    }

    .card-preview {
      height: 260px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000000;
      position: relative;
    }

    .card-preview img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .card:hover .card-preview img {
      transform: scale(1.04);
    }

    .card-info {
      padding: 20px 22px;
      border-top: 1px solid var(--border-subtle);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
    }

    .card-title {
      font-size: 16.5px;
      font-weight: 700;
      margin-bottom: 6px;
    }

    .card-desc {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.55;
      margin-bottom: 16px;
    }

    .card-actions {
      display: flex;
      gap: 10px;
    }

    .pick-btn {
      flex: 1;
      padding: 9px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      border: 1px solid var(--primary);
      background: var(--primary-subtle);
      color: var(--primary);
      cursor: pointer;
      text-align: center;
    }

    .card.selected .pick-btn {
      background: var(--primary);
      color: white;
    }

    .preview-btn {
      padding: 9px 14px;
      border-radius: 8px;
      font-size: 12.5px;
      font-weight: 600;
      border: 1px solid var(--border-subtle);
      background: transparent;
      color: var(--text-muted);
      cursor: pointer;
    }

    .preview-btn:hover {
      background: var(--bg-card-hover);
      color: var(--text-main);
    }

    /* Floating Bottom Action Bar */
    .bottom-bar {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 200;
      background: var(--bg-surface);
      border: 1px solid var(--border-accent);
      border-radius: 16px;
      padding: 16px 32px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      gap: 24px;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      max-width: 90vw;
    }

    .selection-badge {
      background: var(--primary);
      color: white;
      font-size: 13px;
      font-weight: 700;
      padding: 5px 12px;
      border-radius: 6px;
      font-family: var(--font-mono);
    }

    .selection-text {
      font-size: 14.5px;
      font-weight: 600;
    }

    /* Toast */
    #toast {
      position: fixed;
      top: 24px;
      right: 24px;
      background: #10B981;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 13px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
      opacity: 0;
      transform: translateY(-20px);
      transition: all 0.25s ease;
      z-index: 999;
      pointer-events: none;
    }

    #toast.show {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
</head>
<body>
  <div id="toast">Copied to clipboard!</div>

  <!-- Header -->
  <header>
    <div class="brand-group">
      <div class="brand-logo">Q</div>
      <div>
        <div class="brand-title">QuantumFlow — 15 Luxury 3D Decorative Images</div>
        <div class="brand-sub">Realistic 3D Renders (Frosted Glass, Cobalt Chrome, Silk Dunes & Architectural Caustics)</div>
      </div>
    </div>
    <div class="header-actions">
      <button class="btn" onclick="toggleTheme()">
        <span id="themeIcon">🌙</span> <span id="themeLabel">Light Mode</span>
      </button>
      <button class="btn btn-primary" onclick="copyPicks()">
        📋 Confirm & Copy My Pick
      </button>
    </div>
  </header>

  <!-- LIVE IN-PAGE BACKGROUND DEMO BOX -->
  <section class="bg-demo-section">
    <div class="bg-demo-box">
      <!-- Injected 3D Background Image -->
      <div class="bg-image-layer" id="liveBgContainer">
        <img id="liveBgImg" src="${imageOptions[0].file}" alt="Live Background 3D Object" />
      </div>

      <div class="bg-demo-content">
        <span class="demo-tag" id="liveBgRole">CURRENT 3D ACCENT: #01 COBALT & FROSTED GLASS FLUID KNOT</span>
        <h2 class="demo-title">High-End 3D Visual Depth for QuantumFlow</h2>
        <p class="demo-desc">
          Notice how floating a photorealistic 3D sculpture in the background transforms the entire section into a top-tier digital agency portfolio (like Apple VisionOS, Stripe, or Linear). Click "Test in BG" below to test each 3D object.
        </p>
        <div class="demo-cards-row">
          <div class="demo-mini-card">
            <span>💎</span> Optical Glass Caustics
          </div>
          <div class="demo-mini-card">
            <span>🌊</span> Cobalt Liquid Chrome
          </div>
          <div class="demo-mini-card">
            <span>✨</span> 3D Studio Lighting
          </div>
        </div>
      </div>

      <div class="bg-demo-helper">
        ▲ Live Background Test Area
      </div>
    </div>
  </section>

  <!-- Gallery Header -->
  <div class="section-header">
    <div>
      <h3>Pick Your 3D Decorative Image (15 Options)</h3>
      <p>Click "Test in BG" to see it live in the background mockup above.</p>
    </div>
  </div>

  <!-- Main Grid -->
  <main class="decorations-grid" id="grid">
    ${imageOptions.map(item => `
      <div class="card ${item.id === '01' ? 'selected' : ''}" id="card-${item.id}" onclick="togglePick('${item.id}')">
        <div class="card-header">
          <span class="card-id">#${item.id}</span>
          <span class="card-tag">${item.tag}</span>
          <div class="check-circle" id="check-${item.id}">${item.id === '01' ? '✓' : ''}</div>
        </div>
        <div class="card-preview">
          <img src="${item.file}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="card-info">
          <div>
            <div class="card-title">${item.name}</div>
            <div class="card-desc">${item.desc}</div>
          </div>
          <div class="card-actions">
            <button class="pick-btn" id="btn-${item.id}">
              ${item.id === '01' ? 'Selected ✓' : 'Pick Image'}
            </button>
            <button class="preview-btn" onclick="testInBg('${item.id}', event)">
              Test in BG
            </button>
          </div>
        </div>
      </div>
    `).join('')}
  </main>

  <!-- Floating Selection Bar -->
  <div class="bottom-bar">
    <span class="selection-badge" id="countBadge">1 / 2 Picked</span>
    <span class="selection-text" id="selectionSummary">Selected: <strong>#01 (Cobalt & Frosted Glass Fluid Knot)</strong></span>
    <button class="btn btn-primary" onclick="copyPicks()">
      Confirm & Implement Pick
    </button>
  </div>

  <script>
    const items = ${JSON.stringify(imageOptions.reduce((acc, el) => { acc[el.id] = el; return acc; }, {}))};
    let picked = ['01'];

    function testInBg(id, e) {
      if (e) e.stopPropagation();
      const img = document.getElementById('liveBgImg');
      const role = document.getElementById('liveBgRole');
      img.src = items[id].file;
      role.textContent = 'CURRENT 3D ACCENT: #' + id + ' ' + items[id].name.toUpperCase();
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast('Testing #' + id + ' in background preview!');
    }

    function togglePick(id) {
      const card = document.getElementById('card-' + id);
      const btn = document.getElementById('btn-' + id);

      if (picked.includes(id)) {
        picked = picked.filter(x => x !== id);
        card.classList.remove('selected');
        btn.textContent = 'Pick Image';
      } else {
        if (picked.length >= 2) {
          const removed = picked.shift();
          const rCard = document.getElementById('card-' + removed);
          if (rCard) {
            rCard.classList.remove('selected');
            document.getElementById('btn-' + removed).textContent = 'Pick Image';
          }
        }
        picked.push(id);
        card.classList.add('selected');
        btn.textContent = 'Selected ✓';
        testInBg(id);
      }
      updateBar();
    }

    function updateBar() {
      const badge = document.getElementById('countBadge');
      const text = document.getElementById('selectionSummary');
      badge.textContent = picked.length + ' / 2 Picked';

      if (picked.length === 0) {
        text.textContent = 'Click any card to select it for the website background.';
      } else if (picked.length === 1) {
        text.innerHTML = 'Selected: <strong>#' + picked[0] + ' (' + items[picked[0]].name + ')</strong>';
      } else {
        text.innerHTML = 'Selected: <strong>#' + picked[0] + ' (' + items[picked[0]].name + ')</strong> and <strong>#' + picked[1] + ' (' + items[picked[1]].name + ')</strong>';
      }
    }

    function toggleTheme() {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);

      document.getElementById('themeIcon').textContent = next === 'dark' ? '🌙' : '☀️';
      document.getElementById('themeLabel').textContent = next === 'dark' ? 'Light Mode' : 'Dark Mode';
      showToast('Switched to ' + next.toUpperCase() + ' mode');
    }

    function copyPicks() {
      if (picked.length === 0) {
        showToast('Please select at least 1 image first!');
        return;
      }
      const msg = 'I picked 3D image: ' + picked.map(id => '#' + id + ' (' + items[id].name + ')').join(' and ');
      navigator.clipboard.writeText(msg).then(() => {
        showToast('Pick confirmed & copied! Send to chat.');
      });
    }

    function showToast(msg) {
      const t = document.getElementById('toast');
      t.textContent = msg;
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2200);
    }
  </script>
</body>
</html>
`;

const publicPath = path.join(__dirname, '..', 'public', 'decorations-picker.html');
const rootPath = path.join(__dirname, '..', 'decorations-picker.html');

fs.writeFileSync(publicPath, htmlContent, 'utf-8');
fs.writeFileSync(rootPath, htmlContent, 'utf-8');

console.log('Successfully expanded to 15 Luxury 3D Decorative Images!');
