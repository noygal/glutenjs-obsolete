module Gluten {

    export declare class AbsurdCss implements Object { }
    export declare class AbsurdHTMLAttrs implements Object { }
    export declare class AbsurdHTML implements Object { }

    

    export class GlutenObject {
        tag: string = '';
        children: Object = {};
        attributes: AbsurdHTMLAttrs = {};
        style: AbsurdCss = {};
        code: string = '';
        id: string = '';
        classes: string[] = [];
    }

    export class GlutenOptions extends Core.BaseOptions {
        destJS: string = '../gen/js/main.js';
        destCSS: string = '../gen/css/main.css';
        destHTML: string = '../gen/index.html';
        src: string[] = [];
        constructor(option: Object = {}) {
            super();
            this.margeOptions(option);
        }
    }

    export class AbsurdOptions extends Core.BaseOptions {
        combineSelectors = true;
        minify = false;
        processor = [];
        keepCamelCase = false;
        constructor(option: Object = {}) {
            super();
            this.margeOptions(option);
        }
    };

    export class ProcessedObject {
        css: string = '';
        html: string = '';
        js: string = '';
    }

    export class AbsurdObject {
        css: Object = {};
        html: Object = {};
    }
}
