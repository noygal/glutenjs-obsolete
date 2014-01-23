/// <reference path="../../lib/ts-types/all.d.ts" />
declare module Core {
    class BaseOptions {
        public margeOptions(o: Object): void;
    }
    class Utils {
        static MergeObject(o1: any, o2: any): any;
        static GetKeyArray(o: Object): string[];
    }
}
declare module Gluten {
    class AbsurdCss implements Object {
    }
    class AbsurdHTMLAttrs implements Object {
    }
    class AbsurdHTML implements Object {
    }
    class GlutenObject {
        public tag: string;
        public children: Object;
        public attributes: AbsurdHTMLAttrs;
        public style: AbsurdCss;
        public code: string;
        public id: string;
        public classes: string[];
    }
    class GlutenOptions extends Core.BaseOptions {
        public destJS: string;
        public destCSS: string;
        public destHTML: string;
        public src: string[];
        constructor(option?: Object);
    }
    class AbsurdOptions extends Core.BaseOptions {
        public combineSelectors: boolean;
        public minify: boolean;
        public processor: any[];
        public keepCamelCase: boolean;
        constructor(option?: Object);
    }
    class ProcessedObject {
        public css: string;
        public html: string;
        public js: string;
    }
    class AbsurdObject {
        public css: Object;
        public html: Object;
    }
}
declare module Gluten {
    class AbsurdProcessor {
        public absurdOptions: {
            combineSelectors: boolean;
            minify: boolean;
            processor: any[];
            keepCamelCase: boolean;
        };
        public processCombine(page: Gluten.AbsurdObject, callback: (css: string, html: string) => void): void;
    }
}
declare module Gluten {
    class PreProcessor {
        static GlutenAttributes: string[];
        public preProcessRawObject(raw: Object): Gluten.AbsurdObject;
        private recPreprocessHtml(raw);
        private recPreprocessCss(raw);
        public recPreprocessJs(raw: Object): string;
    }
}
declare module Gluten {
    class Compiler {
        public preProcessor: Gluten.PreProcessor;
        public absurd: Gluten.AbsurdProcessor;
        public processRawObject(raw: Object, callback: (processed: Gluten.ProcessedObject) => void): void;
        public processAbsurdObject(raw: Gluten.AbsurdObject, options: any, callback: (processed: Gluten.ProcessedObject) => void): void;
    }
}
declare module Gluten {
    class Writer {
        public writeOutput(object: Gluten.ProcessedObject, options: Gluten.GlutenOptions): void;
    }
}
declare module Gluten {
    class Gluten {
        public compiler: Gluten.Compiler;
        public writer: Gluten.Writer;
        public compile(gluten: Gluten.GlutenObject, options: Gluten.GlutenOptions, callback: (processed: Gluten.ProcessedObject) => void): void;
        public compileWrite(gluten: Gluten.GlutenObject, optionsRaw?: Object, callback?: () => void): void;
        public compileTemplate(template: Gluten.AbsurdObject, options: Gluten.GlutenOptions, callback: (processed: Gluten.ProcessedObject) => void): void;
        public compileTemplateWrite(template: Gluten.AbsurdObject, optionsRaw?: Object, callback?: () => void): void;
    }
}
