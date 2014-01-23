//import fs = require('fs');

module Gluten {
    var fse = require('fs-extra');
    var path = require('path');
    export class Writer {
        writeOutput(object: ProcessedObject, options: GlutenOptions) {
            fse.outputFileSync(path.join(__dirname, '../', options.destHTML), object.html);
            fse.outputFileSync(path.join(__dirname, '../', options.destCSS), object.css);
            fse.outputFileSync(path.join(__dirname, '../', options.destJS), object.js);
        }

    }
}