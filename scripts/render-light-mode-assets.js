const sharp = require('sharp');

async function renderLightAssets() {
  console.log('Rendering light-mode 3D liquid flow assets...');

  // 1. HORIZONTAL LIGHT WAVE (1920x1080)
  {
    const width = 1920;
    const height = 1080;
    const buffer = Buffer.alloc(width * height * 4);

    const lx = -0.45, ly = -0.55, lz = 0.7;
    const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);
    const L = [lx / lLen, ly / lLen, lz / lLen];

    const V = [0, 0, 1];
    const hx = L[0] + V[0], hy = L[1] + V[1], hz = L[2] + V[2];
    const hLen = Math.sqrt(hx * hx + hy * hy + hz * hz);
    const H = [hx / hLen, hy / hLen, hz / hLen];

    // Light-mode crystal azure colors
    const colDeep = [29, 99, 255];       // Vibrant cobalt
    const colMid = [56, 189, 248];       // Electric sky blue
    const colHighlight = [186, 230, 253];// Soft ice sheen
    const colWhite = [255, 255, 255];

    function ribbonCenter(x) {
      const t = x / width;
      return height * (0.52 + 0.22 * Math.sin(t * Math.PI * 2.1 - 0.4) + 0.08 * Math.cos(t * Math.PI * 4.2));
    }

    function ribbonWidth(x) {
      const t = x / width;
      return 160 + 90 * Math.sin(t * Math.PI * 1.8 + 0.5);
    }

    function surfaceHeight(x, y) {
      const c = ribbonCenter(x);
      const w = ribbonWidth(x);
      const dist = (y - c) / w;
      if (Math.abs(dist) > 1.2) return 0;
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
          buffer[idx + 3] = 0;
          continue;
        }

        const z0 = surfaceHeight(x, y);
        if (z0 <= 0.01) {
          buffer[idx + 3] = 0;
          continue;
        }

        const zx = (surfaceHeight(x + delta, y) - surfaceHeight(x - delta, y)) / (2 * delta);
        const zy = (surfaceHeight(x, y + delta) - surfaceHeight(x, y - delta)) / (2 * delta);

        let nx = -zx, ny = -zy, nz = 1.0;
        const nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
        nx /= nLen; ny /= nLen; nz /= nLen;

        const NdotL = Math.max(0, nx * L[0] + ny * L[1] + nz * L[2]);
        const NdotH = Math.max(0, nx * H[0] + ny * H[1] + nz * H[2]);
        const specular = Math.pow(NdotH, 24);
        const fresnel = Math.pow(1.0 - Math.max(0, nz), 2.5);

        let r = colDeep[0] + NdotL * (colMid[0] - colDeep[0]);
        let g = colDeep[1] + NdotL * (colMid[1] - colDeep[1]);
        let b = colDeep[2] + NdotL * (colMid[2] - colDeep[2]);

        r += specular * colWhite[0] * 0.4 + fresnel * (colHighlight[0] - r) * 0.5;
        g += specular * colWhite[1] * 0.4 + fresnel * (colHighlight[1] - g) * 0.5;
        b += specular * colWhite[2] * 0.4 + fresnel * (colHighlight[2] - b) * 0.5;

        // Translucent alpha for crisp, airy appearance on light backgrounds
        let alpha = 90 + NdotL * 80 + specular * 85;
        if (dist > 0.8) {
          const edge = (1.15 - dist) / 0.35;
          alpha *= Math.max(0, Math.min(1, edge));
        }

        if (x < 120) alpha *= (x / 120);
        else if (x > width - 120) alpha *= ((width - x) / 120);

        buffer[idx + 0] = Math.min(255, Math.round(r));
        buffer[idx + 1] = Math.min(255, Math.round(g));
        buffer[idx + 2] = Math.min(255, Math.round(b));
        buffer[idx + 3] = Math.min(255, Math.round(alpha));
      }
    }

    await sharp(buffer, { raw: { width, height, channels: 4 } })
      .png()
      .toFile('public/decorations/liquid-flow-3d-light.png');
    console.log('Saved public/decorations/liquid-flow-3d-light.png');

    // Create a preview on white
    const whiteBg = await sharp({
      create: { width, height, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } }
    }).png().toBuffer();

    await sharp(whiteBg)
      .composite([{ input: 'public/decorations/liquid-flow-3d-light.png' }])
      .jpeg({ quality: 96 })
      .toFile('public/decorations/liquid-flow-3d-light-preview.jpg');
  }

  // 2. VERTICAL LIGHT RIBBON (800x1600)
  {
    const width = 800;
    const height = 1600;
    const buffer = Buffer.alloc(width * height * 4);

    const lx = -0.6, ly = -0.4, lz = 0.7;
    const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);
    const L = [lx / lLen, ly / lLen, lz / lLen];

    const V = [0, 0, 1];
    const hx = L[0] + V[0], hy = L[1] + V[1], hz = L[2] + V[2];
    const hLen = Math.sqrt(hx * hx + hy * hy + hz * hz);
    const H = [hx / hLen, hy / hLen, hz / hLen];

    const colDeep = [29, 99, 255];
    const colMid = [56, 189, 248];
    const colHighlight = [186, 230, 253];
    const colWhite = [255, 255, 255];

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
          buffer[idx + 3] = 0;
          continue;
        }

        const z0 = surfaceHeight(x, y);
        if (z0 <= 0.01) {
          buffer[idx + 3] = 0;
          continue;
        }

        const zx = (surfaceHeight(x + delta, y) - surfaceHeight(x - delta, y)) / (2 * delta);
        const zy = (surfaceHeight(x, y + delta) - surfaceHeight(x, y - delta)) / (2 * delta);

        let nx = -zx, ny = -zy, nz = 1.0;
        const nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
        nx /= nLen; ny /= nLen; nz /= nLen;

        const NdotL = Math.max(0, nx * L[0] + ny * L[1] + nz * L[2]);
        const NdotH = Math.max(0, nx * H[0] + ny * H[1] + nz * H[2]);
        const specular = Math.pow(NdotH, 24);
        const fresnel = Math.pow(1.0 - Math.max(0, nz), 2.5);

        let r = colDeep[0] + NdotL * (colMid[0] - colDeep[0]);
        let g = colDeep[1] + NdotL * (colMid[1] - colDeep[1]);
        let b = colDeep[2] + NdotL * (colMid[2] - colDeep[2]);

        r += specular * colWhite[0] * 0.4 + fresnel * (colHighlight[0] - r) * 0.5;
        g += specular * colWhite[1] * 0.4 + fresnel * (colHighlight[1] - g) * 0.5;
        b += specular * colWhite[2] * 0.4 + fresnel * (colHighlight[2] - b) * 0.5;

        let alpha = 90 + NdotL * 80 + specular * 85;
        if (dist > 0.85) {
          const edge = (1.15 - dist) / 0.3;
          alpha *= Math.max(0, Math.min(1, edge));
        }

        if (y < 80) alpha *= (y / 80);
        else if (y > height - 80) alpha *= ((height - y) / 80);

        buffer[idx + 0] = Math.min(255, Math.round(r));
        buffer[idx + 1] = Math.min(255, Math.round(g));
        buffer[idx + 2] = Math.min(255, Math.round(b));
        buffer[idx + 3] = Math.min(255, Math.round(alpha));
      }
    }

    await sharp(buffer, { raw: { width, height, channels: 4 } })
      .png()
      .toFile('public/decorations/liquid-flow-vertical-light.png');
    console.log('Saved public/decorations/liquid-flow-vertical-light.png');

    const whiteBg = await sharp({
      create: { width, height, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } }
    }).png().toBuffer();

    await sharp(whiteBg)
      .composite([{ input: 'public/decorations/liquid-flow-vertical-light.png' }])
      .jpeg({ quality: 96 })
      .toFile('public/decorations/liquid-flow-vertical-light-preview.jpg');
  }

  console.log('All light mode assets generated successfully!');
}

renderLightAssets().catch(console.error);
