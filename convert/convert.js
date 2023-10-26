const markdownpdf = require("markdown-pdf");
const { createReadStream, createWriteStream } = require("fs");
const { join } = require("path");

const inputPath = join(__dirname, "..", "main.md");
const outputPath = join(__dirname, "..", "main.pdf");

createReadStream(inputPath)
    .pipe(markdownpdf())
    .pipe(createWriteStream(outputPath))
