const sharp = require('sharp');
const path = require('path');

async function renderVerticalLiquidFlow() {
  const width = 800;
  const height = 1600;

  console.log(`Generating Vertical 3D Liquid Flow Ribbon (${width}x${height})...`);

  const buffer = Buffer.alloc(width * height * 4);

  // Lighting from top-left
  const lx = -0.6;
  const ly = -0.4;
  const lz = 0.7;
  const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);
  const L = [lx / lLen, ly / lLen, lz / lLen];

  const V = [0, 0, 1];
  const hx = L[0] + V[0];
  const hy = L[1] + V[1];
  const hz = L[2] + V[2];
  const hLen = Math.sqrt(hx * hx + hy * hy + hz * hz);
  const H = [hx / hLen, hy / hLen, hz / hLen];

  const colDark = [5, 12, 28];
  const colMid = [18, 62, 175];
  const colBright = [29, 99, 255];
  const colHighlight = [103, 232, 249];
  const colWhite = [255, 255, 255];

  // Ribbon center X at given Y (curves in from the right edge toward center and out)
  function ribbonCenterX(y) {
    const t = y / height;
    return width * (0.68 - 0.28 * Math.sin(t * Math.PI * 1.8 + 0.2) - 0.08 * Math.cos(t * Math.PI * 3.6));
  }

  function ribbonWidthY(y) {
    const t = y / height;
    return 180 + 70 * Math.sin(t * Math.PI * 2.2);
  }

  function surfaceHeight(x, y) {
    const c = ribbonCenterX(y);
    const w = ribbonWidthY(y);
    const dist = (x - c) / w;

    if (Math.abs(dist) > 1.2) return 0;

    const arch = Math.max(0, 1 - dist * dist);
    const folds = Math.sin(dist * Math.PI * 2.8) * 0.28 + Math.cos(dist * Math.PI * 5.6 + y * 0.002) * 0.12;

    return Math.max(0, arch + folds) * 110;
  }

  const delta = 1.0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;

      const c = ribbonCenterX(y);
      const w = ribbonWidthY(y);
      const dist = Math.abs(x - c) / w;

      if (dist > 1.15) {
        buffer[idx + 0] = 0;
        buffer[idx + 1] = 0;
        buffer[idx + 2] = 0;
        buffer[idx + 3] = 0;
        continue;
      }

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

      let nx = -zx;
      let ny = -zy;
      let nz = 1.0;
      const nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
      nx /= nLen;
      ny /= nLen;
      nz /= nLen;

      const NdotL = Math.max(0, nx * L[0] + ny * L[1] + nz * L[2]);
      const NdotH = Math.max(0, nx * H[0] + ny * H[1] + nz * H[2]);
      const specular = Math.pow(NdotH, 32);
      const specularSoft = Math.pow(NdotH, 12);
      const fresnel = Math.pow(1.0 - Math.max(0, nz), 3);

      let r = colDark[0] + NdotL * (colBright[0] - colDark[0]);
      let g = colDark[1] + NdotL * (colBright[1] - colDark[1]);
      let b = colDark[2] + NdotL * (colBright[2] - colDark[2]);

      r += specularSoft * (colHighlight[0] * 0.4);
      g += specularSoft * (colHighlight[1] * 0.4);
      b += specularSoft * (colHighlight[2] * 0.4);

      r += specular * colWhite[0] * 0.9 + fresnel * 40;
      g += specular * colWhite[1] * 0.9 + fresnel * 80;
      b += specular * colWhite[2] * 0.9 + fresnel * 120;

      let alpha = 255;
      if (dist > 0.85) {
        const edge = (1.15 - dist) / 0.3;
        alpha = Math.round(Math.max(0, Math.min(1, edge)) * 255);
      }

      if (y < 80) {
        alpha = Math.round(alpha * (y / 80));
      } else if (y > height - 80) {
        alpha = Math.round(alpha * ((height - y) / 80));
      }

      buffer[idx + 0] = Math.min(255, Math.round(r));
      buffer[idx + 1] = Math.min(255, Math.round(g));
      buffer[idx + 2] = Math.min(255, Math.round(b));
      buffer[idx + 3] = alpha;
    }
  }

  const outTransparent = 'public/decorations/liquid-flow-vertical-transparent.png';
  await sharp(buffer, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outTransparent);

  console.log('Saved vertical transparent 3D liquid ribbon to:', outTransparent);

  const darkBg = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 7, g: 11, b: 22, alpha: 1 }
    }
  }).png().toBuffer();

  const outComposite = 'public/decorations/liquid-flow-vertical-preview.jpg';
  await sharp(darkBg)
    .composite([{ input: outTransparent }])
    .jpeg({ quality: 96 })
    .toFile(outComposite);

  console.log('Saved vertical dark preview to:', outComposite);
}

renderVerticalLiquidFlow().catch(console.error);
