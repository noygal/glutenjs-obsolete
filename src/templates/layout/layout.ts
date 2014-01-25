/// <reference path="head.ts"/>
//import head = require('./head');

module Templates {
    export class LayoutOptions extends Core.BaseOptions{
        headOptions: HeadOptions = new HeadOptions();
        constructor(option: Object = {}) {
            super();
            this.margeOptions(option);
        }
    }

    export class Layout {
        private head: Head = new Head();
        public mobileLayout(data: LayoutOptions) {
            var options = new LayoutOptions(data);
            var result = {
                html: { 
                    _: '<!DOCTYPE html>',
                    _include : this.head.headMobile(options.headOptions),
                    body: 'Test'
                },
                css: {
                    body: {
                        backgroundColor: 'red'
                    }
                }
            };
            return result;
        }
    }
}

