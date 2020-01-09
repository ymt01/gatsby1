const optimizer = ampOptimizer.create({
  verbose: true
});



const inputFilePach = 'index.html';
const outputFilePath = 'after.html';
const fs = require('fs');
const AmpOptimizer = require('@ampproject/toolbox-optimizer');
 
const ampOptimizer = AmpOptimizer.create();

const originalHtml = fs.readFileSync(inputFilePach).toString();
 
ampOptimizer.transformHtml(originalHtml).then(optimizedHtml => {
  fs.writeFileSync(outputFilePath, optimizedHtml);
});