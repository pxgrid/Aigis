var path = require('path');
var fs = require('fs-extra');
var ejs = require('ejs');

function loadEJSTemplate(filePath) {
  var templatePath = path.resolve(filePath);
  var template = fs.readFileSync(templatePath, 'utf-8');
  return ejs.compile(template, {filename: templatePath});
}

module.exports = loadEJSTemplate;