/// <reference path="head.ts"/>
//import head = require('./head');

module Templates {
    export class LayoutOptions {
        headOptions: HeadOptions = new HeadOptions();
    }

    export class Layout {
        private head: Head = new Head();
        public mobileLayout(options: LayoutOptions) {
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

