/// <reference path="../../lib/ts-types/all.d.ts"/>
/// <reference path="../core/core.ts"/>
/// <reference path="processors/compiler.ts"/>
/// <reference path="writers/writer.ts"/>

module Gluten {
    export class Gluten {
        compiler = new Compiler();
        writer = new Writer();
        compile(gluten: GlutenObject, options: GlutenOptions, callback: (processed: ProcessedObject) => void): void {
            this.compiler.processRawObject(gluten, callback);
        }
        compileWrite(gluten: GlutenObject, optionsRaw: Object = {}) {
            //console.log(optionsRaw);

            var options = new GlutenOptions(optionsRaw);
            //console.log(options);

            this.compile(gluten, options, (processed: ProcessedObject) => {
                this.writer.writeOutput(processed, options);
            });
        }
        compileTemplate(template: AbsurdObject, options: GlutenOptions, callback: (processed: ProcessedObject) => void): void {
            this.compiler.processAbsurdObject(template, options, callback);
        }
        compileTemplateWrite(template: AbsurdObject, callback: (processed: ProcessedObject) => void) {
            var options = new GlutenOptions(options);
            this.compileTemplate(template, options, (processed: ProcessedObject) => {
                this.writer.writeOutput(processed, options);
            });
        }
    }
}

//declare var module: any;
module.exports = new Gluten.Gluten();
//export = Gluten;