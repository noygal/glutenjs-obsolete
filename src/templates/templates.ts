/// <reference path="layout/layout.ts"/>
/// <reference path="../processors/utils.ts"/>

//import layout = require('./layout/layout');
module Templates {
    export class BaseOptions {
        constructor(options: any = {}) {
            Utils.MergeObject(this, options);
        }
    }

    export class GlutenTemplates {
        public layout = new Layout();
    }
}

declare var module: any;

module.exports = new Templates.GlutenTemplates();

//export = GlutenTemplates;