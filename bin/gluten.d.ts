/// <reference path="../lib/ts-types/all.d.ts" />
declare class AbsurdCss implements Object {
}
declare class AbsurdHTMLAttrs implements Object {
}
declare class AbsurdHTML implements Object {
}
declare class OptionObject {
    public fillTheBlanks(o: Object): void;
}
declare class GlutenObject {
    public tag: string;
    public children: Object;
    public attributes: AbsurdHTMLAttrs;
    public style: AbsurdCss;
    public code: string;
    public id: string;
    public classes: string[];
}
declare class GlutenOptions extends OptionObject {
    public destJS: string;
    public destCSS: string;
    public destHTML: string;
    public src: string[];
    constructor(option?: Object);
}
declare class AbsurdOptions extends OptionObject {
    public combineSelectors: boolean;
    public minify: boolean;
    public processor: any[];
    public keepCamelCase: boolean;
    constructor(option?: Object);
}
declare class ProcessedObject {
    public css: string;
    public html: string;
    public js: string;
}
declare class AbsurdObject {
    public css: Object;
    public html: Object;
}
declare class Utils {
    static MergeObject(o1: any, o2: any): any;
    static GetKeyArray(o: Object): string[];
}
declare var Absurd: any;
declare class AbsurdProcessor {
    public absurdOptions: {
        combineSelectors: boolean;
        minify: boolean;
        processor: any[];
        keepCamelCase: boolean;
    };
    public processCombine(page: AbsurdObject, callback: (css: string, html: string) => void): void;
}
declare class PreProcessor {
    static GlutenAttributes: string[];
    public preProcessRawObject(raw: Object): AbsurdObject;
    private recPreprocessHtml(raw);
    private recPreprocessCss(raw);
    public recPreprocessJs(raw: Object): string;
}
declare var beautify_js: any;
declare class Compiler {
    public preProcessor: PreProcessor;
    public absurd: AbsurdProcessor;
    public processRawObject(raw: Object, callback: (processed: ProcessedObject) => void): void;
}
declare var fse: any;
declare var path: any;
declare class Writer {
    public writeOutput(object: ProcessedObject, options: GlutenOptions): void;
}
declare class Gluten {
    public compiler: Compiler;
    public writer: Writer;
    public compile(gluten: GlutenObject, options: GlutenOptions, callback: (processed: ProcessedObject) => void): void;
    public compileWrite(gluten: GlutenObject, optionsRaw?: Object): void;
    public test(): void;
}
