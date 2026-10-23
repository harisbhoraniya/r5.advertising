const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('./NAEPL FULL BR0CHURE 03.pdf');

pdf(dataBuffer).then(function(data) {
  console.log('Total pages:', data.numpages);
  fs.writeFileSync('./pdf_text.txt', data.text);
  console.log('Saved all text to ./pdf_text.txt');
}).catch(err => console.error('Error:', err));
