const sharp = require('sharp');
const path = require('path');

async function render3DLiquidFlow() {
  const width = 1920;
  const height = 1080;

  console.log(`Generating 3D Liquid Flow Ribbon (${width}x${height})...`);

  // Buffer for RGBA output
  const buffer = Buffer.alloc(width * height * 4);

  // Light direction vector (from top-left and slightly forward)
  const lx = -0.45;
  const ly = -0.55;
  const lz = 0.7;
  const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);
  const L = [lx / lLen, ly / lLen, lz / lLen];

  // Camera / View vector (looking straight down Z)
  const V = [0, 0, 1];
  // Halfway vector for Blinn-Phong specular
  const hx = L[0] + V[0];
  const hy = L[1] + V[1];
  const hz = L[2] + V[2];
  const hLen = Math.sqrt(hx * hx + hy * hy + hz * hz);
  const H = [hx / hLen, hy / hLen, hz / hLen];

  // Cobalt color palette
  const colDark = [5, 12, 28];        // #050C1C deep obsidian navy
  const colMid = [18, 62, 175];       // #123EAF rich cobalt
  const colBright = [29, 99, 255];    // #1D63FF QuantumFlow signature cobalt
  const colHighlight = [103, 232, 249]; // #67E8F9 electric cyan sheen
  const colWhite = [255, 255, 255];   // Specular peak

  // Function that calculates ribbon center Y at given X
  function ribbonCenter(x) {
    const t = x / width;
    // Elegant sweeping S-curve wave across the widescreen canvas
    return height * (0.52 + 0.22 * Math.sin(t * Math.PI * 2.1 - 0.4) + 0.08 * Math.cos(t * Math.PI * 4.2));
  }

  // Ribbon thickness at given X
  function ribbonWidth(x) {
    const t = x / width;
    return 160 + 90 * Math.sin(t * Math.PI * 1.8 + 0.5);
  }

  // Height function Z for 3D surface: creates multiple undulating folds/creases
  function surfaceHeight(x, y) {
    const c = ribbonCenter(x);
    const w = ribbonWidth(x);
    const dist = (y - c) / w; // -1 to +1 across ribbon cross-section

    if (Math.abs(dist) > 1.2) return 0;

    // Cross-sectional arch with 3 silky undulating folds
    const arch = Math.max(0, 1 - dist * dist);
    const folds = Math.sin(dist * Math.PI * 2.8) * 0.28 + Math.cos(dist * Math.PI * 5.6 + x * 0.003) * 0.12;

    return Math.max(0, arch + folds) * 120;
  }

  const delta = 1.0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;

      const c = ribbonCenter(x);
      const w = ribbonWidth(x);
      const dist = Math.abs(y - c) / w;

      if (dist > 1.15) {
        // Outside ribbon: transparent
        buffer[idx + 0] = 0;
        buffer[idx + 1] = 0;
        buffer[idx + 2] = 0;
        buffer[idx + 3] = 0;
        continue;
      }

      // Compute numerical gradient for normal vector
      const z0 = surfaceHeight(x, y);
      if (z0 <= 0.01) {
        buffer[idx + 0] = 0;
        buffer[idx + 1] = 0;
        buffer[idx + 2] = 0;
        buffer[idx + 3] = 0;
        continue;
      }

      const zx = (surfaceHeight(x + delta, y) - surfaceHeight(x - delta, y)) / (2 * delta);
      const zy = (surfaceHeight(x, y + delta) - surfaceHeight(x, y - delta)) / (2 * delta);

      // Normal vector
      let nx = -zx;
      let ny = -zy;
      let nz = 1.0;
      const nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
      nx /= nLen;
      ny /= nLen;
      nz /= nLen;

      // Lighting calculation
      // Diffuse
      const NdotL = Math.max(0, nx * L[0] + ny * L[1] + nz * L[2]);
      // Specular (Blinn-Phong)
      const NdotH = Math.max(0, nx * H[0] + ny * H[1] + nz * H[2]);
      const specular = Math.pow(NdotH, 32);
      const specularSoft = Math.pow(NdotH, 12);

      // Fresnel rim lighting
      const NdotV = Math.max(0, nz);
      const fresnel = Math.pow(1.0 - NdotV, 3);

      // Color blending
      // Base diffuse interpolation
      let r = colDark[0] + NdotL * (colBright[0] - colDark[0]);
      let g = colDark[1] + NdotL * (colBright[1] - colDark[1]);
      let b = colDark[2] + NdotL * (colBright[2] - colDark[2]);

      // Add cyan mid-sheen
      r += specularSoft * (colHighlight[0] * 0.4);
      g += specularSoft * (colHighlight[1] * 0.4);
      b += specularSoft * (colHighlight[2] * 0.4);

      // Add intense specular reflection (glossy liquid silk highlight)
      r += specular * colWhite[0] * 0.9 + fresnel * 40;
      g += specular * colWhite[1] * 0.9 + fresnel * 80;
      b += specular * colWhite[2] * 0.9 + fresnel * 120;

      // Edge antialiasing / feathering
      let alpha = 255;
      if (dist > 0.85) {
        const edge = (1.15 - dist) / 0.3;
        alpha = Math.round(Math.max(0, Math.min(1, edge)) * 255);
      }

      // X-axis fade-in at very ends
      if (x < 120) {
        alpha = Math.round(alpha * (x / 120));
      } else if (x > width - 120) {
        alpha = Math.round(alpha * ((width - x) / 120));
      }

      buffer[idx + 0] = Math.min(255, Math.round(r));
      buffer[idx + 1] = Math.min(255, Math.round(g));
      buffer[idx + 2] = Math.min(255, Math.round(b));
      buffer[idx + 3] = alpha;
    }
  }

  const outTransparent = 'public/decorations/liquid-flow-3d-transparent.png';
  await sharp(buffer, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outTransparent);

  console.log('Saved transparent 3D liquid ribbon to:', outTransparent);

  // Also composite on QuantumFlow dark background #070B16 for standalone viewing
  const darkBg = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 7, g: 11, b: 22, alpha: 1 }
    }
  }).png().toBuffer();

  const outComposite = 'public/decorations/liquid-flow-3d-preview.jpg';
  await sharp(darkBg)
    .composite([{ input: outTransparent }])
    .jpeg({ quality: 96 })
    .toFile(outComposite);

  console.log('Saved dark background preview to:', outComposite);
}

render3DLiquidFlow().catch(console.error);
