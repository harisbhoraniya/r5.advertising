const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function extractImages() {
  const dataBuffer = fs.readFileSync('./NAEPL FULL BR0CHURE 03.pdf');
  const parser = new PDFParse({ data: dataBuffer });
  
  // Let's inspect getImage
  const imgResult = await parser.getImage({
    partial: [30, 31, 32, 33, 34],
    imageBuffer: true
  });
  
  console.log('Images extracted per page:');
  const outDir = './public/assets/cable_cleats';
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  let count = 0;
  for (const page of imgResult.pages) {
    console.log(`Page ${page.pageNumber}: ${page.images.length} images`);
    for (let i = 0; i < page.images.length; i++) {
      const img = page.images[i];
      const filename = `page_${page.pageNumber}_img_${i + 1}_${img.width}x${img.height}.png`;
      if (img.data && img.data.length > 0) {
        fs.writeFileSync(path.join(outDir, filename), Buffer.from(img.data));
        console.log(`  Saved ${filename} (${img.data.length} bytes)`);
        count++;
      }
    }
  }
  console.log(`Total images saved: ${count}`);
}

extractImages().catch(console.error);
