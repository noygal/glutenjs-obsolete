declare module Templates {
    class HeadOptions extends Templates.BaseOptions {
        public title: string;
        public description: string;
        public stylesheets: string[];
        public scripts: string[];
    }
    class Head {
        public headMobile(data: HeadOptions): {
            html: {
                head: string[];
            };
            css: {};
        };
    }
}
declare module Templates {
    class LayoutOptions {
        public headOptions: Templates.HeadOptions;
    }
    class Layout {
        private head;
        public mobileLayout(options: LayoutOptions): {
            html: {
                _: string;
                _include: {
                    html: {
                        head: string[];
                    };
                    css: {};
                };
                body: string;
            };
            css: {
                body: {
                    backgroundColor: string;
                };
            };
        };
    }
}
declare class Utils {
    static MergeObject(o1: any, o2: any): any;
    static GetKeyArray(o: Object): string[];
}
declare module Templates {
    class BaseOptions {
        constructor(options?: any);
    }
    class GlutenTemplates {
        public layout: Templates.Layout;
    }
}
declare var module: any;
