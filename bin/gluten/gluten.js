var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var OptionObject = (function () {
    function OptionObject() {
    }
    OptionObject.prototype.fillTheBlanks = function (o) {
        console.log(this);
        console.log(o);

        Utils.MergeObject(this, o);
        console.log(this);
    };
    return OptionObject;
})();
var BaseOptions = (function () {
    function BaseOptions(options) {
        if (typeof options === "undefined") { options = {}; }
        console.log(this);
        Utils.MergeObject(this, options);
    }
    return BaseOptions;
})();

var GlutenObject = (function () {
    function GlutenObject() {
        this.tag = '';
        this.children = {};
        this.attributes = {};
        this.style = {};
        this.code = '';
        this.id = '';
        this.classes = [];
    }
    return GlutenObject;
})();

var GlutenOptions = (function (_super) {
    __extends(GlutenOptions, _super);
    function GlutenOptions(option) {
        if (typeof option === "undefined") { option = {}; }
        _super.call(this);
        this.destJS = '../gen/js/main.js';
        this.destCSS = '../gen/css/main.css';
        this.destHTML = '../gen/index.html';
        this.src = [];
        this.fillTheBlanks(option);
    }
    return GlutenOptions;
})(OptionObject);

var AbsurdOptions = (function (_super) {
    __extends(AbsurdOptions, _super);
    function AbsurdOptions(option) {
        if (typeof option === "undefined") { option = {}; }
        _super.call(this);
        this.combineSelectors = true;
        this.minify = false;
        this.processor = [];
        this.keepCamelCase = false;
        this.fillTheBlanks(option);
    }
    return AbsurdOptions;
})(OptionObject);
;

var ProcessedObject = (function () {
    function ProcessedObject() {
        this.css = '';
        this.html = '';
        this.js = '';
    }
    return ProcessedObject;
})();

var AbsurdObject = (function () {
    function AbsurdObject() {
        this.css = {};
        this.html = {};
    }
    return AbsurdObject;
})();
var Utils = (function () {
    function Utils() {
    }
    Utils.MergeObject = function (o1, o2) {
        if (o1 == null || o2 == null)
            return o1;

        for (var key in o2)
            if (o2.hasOwnProperty(key))
                o1[key] = o2[key];

        return o1;
    };
    Utils.GetKeyArray = function (o) {
        var result = [];
        for (var key in o) {
            result.push(key);
        }
        return result;
    };
    return Utils;
})();
var Absurd = require("absurd");

var AbsurdProcessor = (function () {
    function AbsurdProcessor() {
        this.absurdOptions = {
            combineSelectors: true,
            minify: false,
            processor: [],
            keepCamelCase: false
        };
    }
    AbsurdProcessor.prototype.processCombine = function (page, callback) {
        Absurd(function (api) {
            api.morph("component").add(page).compile(function (err, css, html) {
                if (err)
                    throw err;
                callback(css, html);
            }, this.absurdOptions);
        });
    };
    return AbsurdProcessor;
})();
;
var PreProcessor = (function () {
    function PreProcessor() {
    }
    PreProcessor.prototype.preProcessRawObject = function (raw) {
        var result = new AbsurdObject();
        result.html = this.recPreprocessHtml(raw);
        result.css = this.recPreprocessCss(raw);
        return result;
    };
    PreProcessor.prototype.recPreprocessHtml = function (raw) {
        var result = [];
        for (var key in raw) {
            var element = raw[key];

            var tag = (element.tag || 'div');
            if (!!element.id)
                tag += '#' + element.id;
            if (!!element.classes)
                for (var cls in element.classes) {
                    tag += '.' + cls;
                }
            ;

            result[tag] = element.attributes ? { _attrs: JSON.parse(JSON.stringify(element.attributes)) } : {};
            Utils.MergeObject(result[tag], this.recPreprocessHtml(element.children));
            var element = raw[key];
        }
        return result;
    };
    PreProcessor.prototype.recPreprocessCss = function (raw) {
        var result = {};
        for (var key in raw) {
            var element = raw[key];
            var cls = key;
            result[cls] = element.style ? JSON.parse(JSON.stringify(element.style)) : {};
            Utils.MergeObject(result[cls], this.recPreprocessCss(element.children));
        }
        return result;
    };
    PreProcessor.prototype.recPreprocessJs = function (raw) {
        var result = '';
        for (var key in raw) {
            var element = raw[key];
            if (element.code)
                result += element.code;
            result += this.recPreprocessJs(element.children);
        }
        return result;
    };
    PreProcessor.GlutenAttributes = Utils.GetKeyArray(new GlutenObject);
    return PreProcessor;
})();
var beautify_js = require('js-beautify');

var Compiler = (function () {
    function Compiler() {
        this.preProcessor = new PreProcessor();
        this.absurd = new AbsurdProcessor();
    }
    Compiler.prototype.processRawObject = function (raw, callback) {
        var _this = this;
        this.absurd.processCombine(this.preProcessor.preProcessRawObject(raw), function (css, html) {
            var result = new ProcessedObject();
            result.css = css;
            result.html = html;
            result.js = beautify_js.js_beautify(_this.preProcessor.recPreprocessJs(raw), { indent_with_tabs: true });
            callback(result);
        });
    };
    Compiler.prototype.processAbsurdObject = function (raw, options, callback) {
        this.absurd.processCombine(raw, function (css, html) {
            var result = new ProcessedObject();
            result.css = css;
            result.html = html;
            callback(result);
        });
    };
    return Compiler;
})();
var fse = require('fs-extra');
var path = require('path');
var Writer = (function () {
    function Writer() {
    }
    Writer.prototype.writeOutput = function (object, options) {
        fse.outputFileSync(path.join(__dirname, '../', options.destHTML), object.html);
        fse.outputFileSync(path.join(__dirname, '../', options.destCSS), object.css);
        fse.outputFileSync(path.join(__dirname, '../', options.destJS), object.js);
    };
    return Writer;
})();
var Gluten = (function () {
    function Gluten() {
        this.compiler = new Compiler();
        this.writer = new Writer();
    }
    Gluten.prototype.compile = function (gluten, options, callback) {
        this.compiler.processRawObject(gluten, callback);
    };
    Gluten.prototype.compileWrite = function (gluten, optionsRaw) {
        if (typeof optionsRaw === "undefined") { optionsRaw = {}; }
        var _this = this;
        var options = new GlutenOptions(optionsRaw);

        this.compile(gluten, options, function (processed) {
            _this.writer.writeOutput(processed, options);
        });
    };
    Gluten.prototype.compileTemplate = function (template, options, callback) {
        this.compiler.processAbsurdObject(template, options, callback);
    };
    Gluten.prototype.compileTemplateWrite = function (template, callback) {
        var _this = this;
        var options = new GlutenOptions(options);
        this.compileTemplate(template, options, function (processed) {
            _this.writer.writeOutput(processed, options);
        });
    };
    return Gluten;
})();

module.exports = new Gluten();
