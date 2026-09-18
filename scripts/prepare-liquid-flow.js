const sharp = require('sharp');
const path = require('path');

async function createCleanLiquidFlowAsset() {
  const inputPath = 'public/decorations/option11-liquid-flow-layout.jpg';
  
  // We will create two proper assets:
  // Asset A: The Widescreen Right-Side Flow Ribbon (pure, high-res, feathered, 800x1376)
  // Asset B: The Full Clean Background Canvas (1600x1200) with the liquid ribbons framing the edges seamlessly into #070B16

  const metadata = await sharp(inputPath).metadata();
  console.log('Original dimensions:', metadata.width, metadata.height);

  // 1. Let's inspect the right ribbon:
  // In the original 768x1376 image:
  // The right ribbon occupies x from 550 to 768.
  // Let's create an ultra-smooth, 2x upscaled (or high-res) right liquid ribbon
  // where the left boundary is smoothly masked to complete alpha 0 with a soft sigmoid curve,
  // perfectly preserving every specular reflection, silky fold, and deep cobalt tone!

  const rightRibbonWidth = 220;
  const startX = 768 - rightRibbonWidth; // 548

  const { data: rawRgb } = await sharp(inputPath)
    .extract({ left: startX, top: 0, width: rightRibbonWidth, height: 1376 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Let's build a smooth alpha channel
  const rgba = Buffer.alloc(rightRibbonWidth * 1376 * 4);
  for (let y = 0; y < 1376; y++) {
    for (let x = 0; x < rightRibbonWidth; x++) {
      const idx = y * rightRibbonWidth + x;
      const r = rawRgb[idx * 3 + 0];
      const g = rawRgb[idx * 3 + 1];
      const b = rawRgb[idx * 3 + 2];

      // Calculate distance from left
      let alpha;
      if (x < 30) {
        alpha = 0;
      } else if (x < 90) {
        // Smooth cubic ease from 0 to 255
        const t = (x - 30) / 60;
        const ease = t * t * (3 - 2 * t);
        alpha = Math.round(ease * 255);
      } else {
        alpha = 255;
      }

      // Also if a pixel is very dark (close to background #070B16), we can let it feather into transparency
      const brightness = (r + g + b) / 3;
      if (x < 120 && brightness < 20) {
        alpha = Math.min(alpha, Math.round((brightness / 20) * alpha));
      }

      rgba[idx * 4 + 0] = r;
      rgba[idx * 4 + 1] = g;
      rgba[idx * 4 + 2] = b;
      rgba[idx * 4 + 3] = alpha;
    }
  }

  // Save the right liquid flow ribbon
  const ribbonOut = 'public/decorations/liquid-flow-ribbon-clean.png';
  await sharp(rgba, { raw: { width: rightRibbonWidth, height: 1376, channels: 4 } })
    .png()
    .toFile(ribbonOut);

  console.log('Saved clean ribbon asset to:', ribbonOut);

  // 2. Also create a high-res widescreen composite asset for full page background preview:
  // Size: 1920x1080
  // Background: #070B16
  // Right side: The liquid ribbon scaled to height 1080, placed along the right edge
  // Bottom-left: The liquid wave accent placed along the bottom left
  const baseBg = await sharp({
    create: {
      width: 1920,
      height: 1080,
      channels: 4,
      background: { r: 7, g: 11, b: 22, alpha: 1 }
    }
  }).png().toBuffer();

  const resizedRibbon = await sharp(ribbonOut)
    .resize({ height: 1080 })
    .toBuffer();

  const compositeImage = await sharp(baseBg)
    .composite([
      {
        input: resizedRibbon,
        top: 0,
        left: 1920 - Math.round(rightRibbonWidth * (1080 / 1376)) - 40,
        blend: 'over'
      }
    ])
    .png()
    .toFile('public/decorations/liquid-flow-background-preview.png');

  console.log('Saved full background preview asset to: public/decorations/liquid-flow-background-preview.png');
}

createCleanLiquidFlowAsset().catch(console.error);
