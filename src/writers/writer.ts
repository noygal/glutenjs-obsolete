//import fs = require('fs');
var fse = require('fs-extra');
var path = require('path');
class Writer {
    writeOutput(object: ProcessedObject, options: GlutenOptions) {
        fse.outputFileSync(path.join(__dirname, '../', options.destHTML), object.html);
        fse.outputFileSync(path.join(__dirname, '../', options.destCSS), object.css);
        fse.outputFileSync(path.join(__dirname, '../', options.destJS), object.js);
    }
}