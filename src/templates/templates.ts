/// <reference path="../core/core.ts"/>
/// <reference path="layout/layout.ts"/>

//import layout = require('./layout/layout');
module Templates {
    //export class BaseOptions {
    //    constructor(options: any = {}) {
    //        Core.Utils.MergeObject(this, options);
    //    }
    //}

    export class GlutenTemplates {
        public layout = new Layout();
    }
}

declare var module: any;

module.exports = new Templates.GlutenTemplates();

//export = GlutenTemplates;