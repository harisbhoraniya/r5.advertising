const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function renderPages() {
  const dataBuffer = fs.readFileSync('./NAEPL FULL BR0CHURE 03.pdf');
  const parser = new PDFParse({ data: dataBuffer });
  
  const result = await parser.getScreenshot({
    partial: [29, 30, 31, 32, 33, 34],
    scale: 2,
    imageBuffer: true
  });
  
  const outDir = './public/assets/cable_cleats/rendered_pages';
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const page of result.pages) {
    const filename = `page_${page.pageNumber}.png`;
    if (page.data && page.data.length > 0) {
      fs.writeFileSync(path.join(outDir, filename), Buffer.from(page.data));
      console.log(`Saved ${filename} (${page.width}x${page.height}, ${page.data.length} bytes)`);
    }
  }
}

renderPages().catch(console.error);
