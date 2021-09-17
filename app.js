const fs = require("fs");
const path = require("path");
var convert = require('xml-js');

let xmlPath = path.join(__dirname, './pom.xml');
let xmlData = convert.xml2json(fs.readFileSync(xmlPath, 'utf8'), {compact: true});
console.log("-------XMLData---------", xmlData)
let finalXmlData = convert.json2xml(JSON.parse(xmlData), {compact: true, spaces: 4});
console.log("-----finalXmlData--XMLData---------", finalXmlData)
console.log("-----finalXmlData--typeof---------", typeof(finalXmlData))
fs.writeFileSync(xmlPath, finalXmlData, 'utf8');