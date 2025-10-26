const fs = require('fs');
const path = require('path');
const detectFileEncoding = require('detect-file-encoding-and-language'); // Ensure this package is installed

const asciiArtDir = path.join(__dirname, '..', 'ascii-art');
const categories = ['Deities', 'Symbols', 'Graphics'];

categories.forEach(category => {
  const categoryPath = path.join(asciiArtDir, category);
  fs.readdirSync(categoryPath).forEach(file => {
    const filePath = path.join(categoryPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Check file encoding
    const encoding = detectFileEncoding(fileContent);
    if (encoding !== 'utf-8') {
      console.error(`File ${file} is not UTF-8 encoded.`);
    }

    // Check metadata header
    const metadataRegex = /^Title: .*\nCategory: .*\nAuthor: .*\nDate: .*\n/;
    if (!metadataRegex.test(fileContent)) {
      console.error(`File ${file} is missing or has an invalid metadata header.`);
    }

    // Check for empty lines or inconsistent formatting
    const lines = fileContent.split('\n');
    lines.forEach((line, index) => {
      if (line.trim() === '' && index !== lines.length - 1) {
        console.error(`File ${file} has an empty line at line ${index + 1}.`);
      }
    });
  });
});
