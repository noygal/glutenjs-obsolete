class PreProcessor {
    static GlutenAttributes: string[] = Utils.GetKeyArray(new GlutenObject);
    preProcessRawObject(raw: Object): AbsurdObject {
        var result = new AbsurdObject();
        result.html = this.recPreprocessHtml(raw);
        result.css = this.recPreprocessCss(raw);
        return result;
    }
    private recPreprocessHtml(raw: Object): Object[] {
        var result = [];
        for (var key in raw) {
            var element: GlutenObject = raw[key];
            //create html tag
            //var tag = (element.tag || 'div') + (element.id ? '#' + element.id : '') + '.' + key;
            var tag = (element.tag || 'div');
            if (!!element.id) tag += '#' + element.id;
            if (!!element.classes) for (var cls in element.classes) { tag += '.' + cls; };
            //result[tag] = element.attributes ? { _attrs: JSON.parse(JSON.stringify(element.attributes)) } : {};
            result[tag] = element.attributes ? { _attrs: JSON.parse(JSON.stringify(element.attributes)) } : {};
            Utils.MergeObject(result[tag], this.recPreprocessHtml(element.children));
            var element: GlutenObject = raw[key];
            //var tag = (element.tag || 'div');
            //if (!!element.id) tag += '#' + element.id;
            //if (!!element.classes) for (var cls in element.classes) { tag += '.' + cls; };
            //var processed = {};
            //processed[tag] = element.attributes ? { _attrs: JSON.parse(JSON.stringify(element.attributes)) } : {};
        }
        return result;
    }
    private recPreprocessCss(raw: Object): Object {
        var result = {};
        for (var key in raw) {
            var element: GlutenObject = raw[key];
            var cls = key;
            result[cls] = element.style ? JSON.parse(JSON.stringify(element.style)) : {};
            Utils.MergeObject(result[cls], this.recPreprocessCss(element.children));
        }
        return result;
    }
    recPreprocessJs(raw: Object): string {
        var result = '';
        for (var key in raw) {
            var element: GlutenObject = raw[key];
            if (element.code) result += element.code;
            result+= this.recPreprocessJs(element.children);
        }
        return result;
    }
}