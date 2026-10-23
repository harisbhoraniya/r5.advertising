const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function main() {
  const dataBuffer = fs.readFileSync('./NAEPL FULL BR0CHURE 03.pdf');
  const parser = new PDFParse({ data: dataBuffer });
  const result = await parser.getText();
  console.log('Result total pages:', result.total);
  
  result.pages.forEach((p) => {
    if (/cleat/i.test(p.text)) {
      console.log(`\n=== PAGE ${p.num} ===\n`);
      console.log(p.text.trim());
    }
  });
}

main().catch(console.error);
