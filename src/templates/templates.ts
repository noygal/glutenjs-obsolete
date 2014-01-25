/// <reference path="../core/core.ts"/>
/// <reference path="layout/layout.ts"/>

//import layout = require('./layout/layout');
module Templates {
    export class TemplateUtils {
        public static SetAttributes(attributes: Object): Object {
            //var result = { _attrs: attributes};
            return { _attrs: attributes };
        }
        //public static SetInclude(template: Object): Object {
        //    //var result = { _attrs: attributes};
        //    return { _include: template };
        //}
        //public static SetRawValue(rawValue: string): Object {
        //    //var result = { _attrs: attributes};
        //    return { _: rawValue };
        //}
    }

    export class GlutenTemplates {
        public layout = new Layout();
    }
}

declare var module: any;

module.exports = new Templates.GlutenTemplates();

//export = GlutenTemplates;