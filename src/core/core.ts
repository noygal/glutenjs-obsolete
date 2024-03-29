module Core {
    export class BaseOptions {
        margeOptions(o: Object) {
            //for (var key in this) {
            //    if (o[key] !== undefined) this[key] = o[key];
            //}
            //console.log(this);
            //console.log(o);

            Utils.MergeObject(this, o);
            //console.log(this);
        }
    }
    export class Utils {
        static MergeObject(o1, o2) {
            if (o1 == null || o2 == null)
                return o1;

            for (var key in o2)
                if (o2.hasOwnProperty(key))
                    o1[key] = o2[key];

            return o1;
        }
        static GetKeyArray(o: Object): string[] {
            var result: string[] = [];
            for (var key in o) {
                result.push(key);
            }
            return result;
        }
    }
}
//module.exports = new Gluten();
