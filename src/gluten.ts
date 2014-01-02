/// <reference path="../lib/ts-types/all.d.ts"/>
/// <reference path="processors/compiler.ts"/>
/// <reference path="writers/writer.ts"/>


class Gluten {
    compiler = new Compiler();
    writer = new Writer();
    compile(gluten: GlutenObject, options : GlutenOptions, callback : (processed : ProcessedObject) => void): void {
        this.compiler.processRawObject(gluten, callback);
    }
    compileWrite(gluten: GlutenObject, optionsRaw: Object = {}) {
        var options = new GlutenOptions(options);
        this.compile(gluten, options, (processed: ProcessedObject) => {
            this.writer.writeOutput(processed, options);
        });
    }
    test() {
        console.log('test');
    }
}

//sdeclare var module: any;
module.exports = new Gluten();