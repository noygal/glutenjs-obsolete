/// <reference path="../models/models.ts"/>
/// <reference path="absurd.ts"/>
/// <reference path="preprocessor.ts"/>

module Gluten {
    var beautify_js = require('js-beautify');
    export class Compiler {
        preProcessor = new PreProcessor();
        absurd = new AbsurdProcessor();
        processRawObject(raw: Object, callback: (processed: ProcessedObject) => void): void {
            this.absurd.processCombine(this.preProcessor.preProcessRawObject(raw), (css: string, html: string) => {
                var result = new ProcessedObject();
                result.css = css;
                result.html = html;
                result.js = beautify_js.js_beautify(this.preProcessor.recPreprocessJs(raw), { indent_with_tabs: true });
                callback(result);
            });
        }
        processAbsurdObject(raw: AbsurdObject, options, callback: (processed: ProcessedObject) => void): void {
            this.absurd.processCombine(raw, (css: string, html: string) => {
                var result = new ProcessedObject();
                result.css = css;
                result.html = html;
                callback(result);
            });
        }
    }
}