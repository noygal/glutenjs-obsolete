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
        compileWrite(gluten: GlutenObject, optionsRaw: Object = {}, callback: () => void = () => { }) {
            //console.log(optionsRaw);

            var options = new GlutenOptions(optionsRaw);
            //console.log(options);

            this.compile(gluten, options, (processed: ProcessedObject) => {
                this.writer.writeOutput(processed, options);
                callback();
            });
        }
        compileTemplate(template: AbsurdObject, options: GlutenOptions, callback: (processed: ProcessedObject) => void): void {
            this.compiler.processAbsurdObject(template, options, callback);
        }
        compileTemplateWrite(template: AbsurdObject, optionsRaw: Object = {},
            callback: () => void = () => { }) {
            var options = new GlutenOptions(optionsRaw);
            this.compileTemplate(template, options, (processed: ProcessedObject) => {
                this.writer.writeOutput(processed, options);
                callback();
            });
        }
    }
}

//declare var module: any;
module.exports = new Gluten.Gluten();
//export = Gluten;