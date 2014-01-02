

//declare function require(name:string);
var Absurd : any = require("absurd");

class AbsurdProcessor {
	absurdOptions = {
				combineSelectors: true,
				minify: false,
				processor: [],
				keepCamelCase: false
			};
    processCombine(page: AbsurdObject, callback : (css : string, html : string) => void) : void {
        Absurd(function (api) {
            api.morph("component")
                .add(page)
                .compile((err, css, html) => {
                    if (err) throw err;
                    callback(css, html);
                }, this.absurdOptions);
        });
    }
    
};
