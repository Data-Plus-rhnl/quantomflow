const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
  const width = 2400;
  const height = 1200;

  // Multi-layer 3D liquid silk ribbon wave
  const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Deep silk shadow gradient -->
    <linearGradient id="silkShadow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050B1A" stop-opacity="0.95" />
      <stop offset="50%" stop-color="#0A1636" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#02050E" stop-opacity="0.95" />
    </linearGradient>

    <!-- Main royal cobalt silk gradient -->
    <linearGradient id="silkCobaltMain" x1="0%" y1="20%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#081A4C" />
      <stop offset="25%" stop-color="#123EAF" />
      <stop offset="50%" stop-color="#1D63FF" />
      <stop offset="75%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#081A4C" />
    </linearGradient>

    <!-- Silk crest highlight gradient -->
    <linearGradient id="silkCrest" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.95" />
      <stop offset="35%" stop-color="#60A5FA" stop-opacity="0.9" />
      <stop offset="65%" stop-color="#1D63FF" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#06B6D4" stop-opacity="0.9" />
    </linearGradient>

    <!-- Specular sheen white/cyan highlight -->
    <linearGradient id="specularSheen" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0" />
      <stop offset="25%" stop-color="#FFFFFF" stop-opacity="0.75" />
      <stop offset="50%" stop-color="#E0F2FE" stop-opacity="0.95" />
      <stop offset="75%" stop-color="#67E8F9" stop-opacity="0.75" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </linearGradient>

    <!-- Deep fold shadow filter -->
    <filter id="foldShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="24" stdDeviation="30" flood-color="#02050E" flood-opacity="0.8" />
    </filter>
  </defs>

  <!-- Layer 1: Ambient deep blue back-flow -->
  <path d="M-100 750 C400 950 900 450 1500 650 C1950 800 2200 600 2550 450 L2550 1100 C2100 1200 1600 1000 1100 1150 C600 1300 100 1050 -100 1150 Z"
        fill="url(#silkShadow)" opacity="0.7" />

  <!-- Layer 2: Secondary under-ribbon fold -->
  <path filter="url(#foldShadow)"
        d="M-100 620 C350 820 850 320 1450 520 C1900 680 2150 480 2550 320 L2550 850 C2150 980 1800 800 1350 720 C900 640 400 920 -100 800 Z"
        fill="url(#silkCobaltMain)" opacity="0.85" />

  <!-- Layer 3: Primary glossy 3D silk ribbon -->
  <path filter="url(#foldShadow)"
        d="M-100 480 C300 680 800 180 1400 380 C1850 540 2100 320 2550 180 L2550 650 C2100 780 1750 620 1300 520 C850 420 350 720 -100 600 Z"
        fill="url(#silkCrest)" />

  <!-- Layer 4: Inner fold crease for 3D depth -->
  <path d="M-50 490 C320 670 780 210 1380 390 C1820 530 2080 340 2500 200"
        stroke="url(#specularSheen)" stroke-width="7" stroke-linecap="round" opacity="0.85" />

  <!-- Layer 5: Top crest specular rim light -->
  <path d="M-20 470 C340 650 820 170 1420 370 C1860 520 2110 310 2520 170"
        stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.9" />

  <!-- Layer 6: Lower soft reflection rim -->
  <path d="M-80 580 C380 700 860 410 1320 510 C1760 610 2120 760 2520 630"
        stroke="#38BDF8" stroke-width="4" stroke-linecap="round" opacity="0.55" />
</svg>
`;

  const outputPath = path.join(__dirname, '..', 'public', 'decorations', 'liquid-flow-widescreen.png');
  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);

  console.log('Successfully generated widescreen liquid flow asset at:', outputPath);
}

main().catch(console.error);
