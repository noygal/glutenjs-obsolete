
declare class AbsurdCss implements Object { }
declare class AbsurdHTMLAttrs implements Object { }
declare class AbsurdHTML implements Object { }

class OptionObject {
    fillTheBlanks(o: Object) {
        for (var key in this) {
            if (o[key] !== undefined) this[key] = o[key];
        }
    }
}

class GlutenObject {
    tag: string = '';
    children: Object = {};
    attributes: AbsurdHTMLAttrs = {};
    style: AbsurdCss = {};
    code: string = '';
    id: string = '';
    classes: string[] = [];
}

class GlutenOptions extends OptionObject {
    destJS: string = 'gen/js/main.js';
    destCSS: string = 'gen/css/main.css';
    destHTML: string = 'gen/index.html';
    src: string[] = [];
    constructor(option: Object = {}) {
        super();
        this.fillTheBlanks(option);
    }
} 

class AbsurdOptions extends OptionObject {
    combineSelectors = true;
    minify = false;
    processor = [];
    keepCamelCase = false;
    constructor(option: Object = {}) {
        super();
        this.fillTheBlanks(option);
    }
};

class ProcessedObject {
    css: string = '';
    html: string = '';
    js: string = '';
}

class AbsurdObject {
    css: Object = {};
    html: Object = {};
}
