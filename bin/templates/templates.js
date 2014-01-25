var Core;
(function (Core) {
    var BaseOptions = (function () {
        function BaseOptions() {
        }
        BaseOptions.prototype.margeOptions = function (o) {
            Utils.MergeObject(this, o);
        };
        return BaseOptions;
    })();
    Core.BaseOptions = BaseOptions;
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
    Core.Utils = Utils;
})(Core || (Core = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Templates;
(function (Templates) {
    var HeadOptions = (function (_super) {
        __extends(HeadOptions, _super);
        function HeadOptions(option) {
            if (typeof option === "undefined") { option = {}; }
            _super.call(this);
            this.title = 'Hello world';
            this.description = 'GlutenJS Hello world';
            this.stylesheets = [];
            this.scripts = [];
            this.margeOptions(option);
        }
        return HeadOptions;
    })(Core.BaseOptions);
    Templates.HeadOptions = HeadOptions;

    var Head = (function () {
        function Head() {
        }
        Head.prototype.headMobile = function (data) {
            var options = new HeadOptions(data);
            var result = {
                html: {
                    head: {
                        'meta[charset="utf-8"]': '',
                        'title': options.title,
                        'meta[name="description"]': Templates.TemplateUtils.SetAttributes({ content: options.description }),
                        'meta[name="HandheldFriendly" content="True"]': '',
                        'meta[name="MobileOptimized" content="320"]': '',
                        'meta[name="viewport" content="width=device-width, initial-scale=1, minimal-ui"]': '',
                        'meta[http-equiv="cleartype" content="on"]': ''
                    }
                },
                css: {}
            };

            return result;
        };
        return Head;
    })();
    Templates.Head = Head;
})(Templates || (Templates = {}));
var Templates;
(function (Templates) {
    var LayoutOptions = (function (_super) {
        __extends(LayoutOptions, _super);
        function LayoutOptions(option) {
            if (typeof option === "undefined") { option = {}; }
            _super.call(this);
            this.headOptions = new Templates.HeadOptions();
            this.margeOptions(option);
        }
        return LayoutOptions;
    })(Core.BaseOptions);
    Templates.LayoutOptions = LayoutOptions;

    var Layout = (function () {
        function Layout() {
            this.head = new Templates.Head();
        }
        Layout.prototype.mobileLayout = function (data) {
            var options = new LayoutOptions(data);
            var result = {
                html: {
                    _: '<!DOCTYPE html>',
                    _include: this.head.headMobile(options.headOptions),
                    body: 'Test'
                },
                css: {
                    body: {
                        backgroundColor: 'red'
                    }
                }
            };
            return result;
        };
        return Layout;
    })();
    Templates.Layout = Layout;
})(Templates || (Templates = {}));
var Templates;
(function (Templates) {
    var TemplateUtils = (function () {
        function TemplateUtils() {
        }
        TemplateUtils.SetAttributes = function (attributes) {
            return { _attrs: attributes };
        };
        return TemplateUtils;
    })();
    Templates.TemplateUtils = TemplateUtils;

    var GlutenTemplates = (function () {
        function GlutenTemplates() {
            this.layout = new Templates.Layout();
        }
        return GlutenTemplates;
    })();
    Templates.GlutenTemplates = GlutenTemplates;
})(Templates || (Templates = {}));

module.exports = new Templates.GlutenTemplates();
