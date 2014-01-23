declare module Core {
    class BaseOptions {
        public margeOptions(o: Object): void;
    }
    class Utils {
        static MergeObject(o1: any, o2: any): any;
        static GetKeyArray(o: Object): string[];
    }
}
declare module Templates {
    class HeadOptions extends Core.BaseOptions {
        public title: string;
        public description: string;
        public stylesheets: string[];
        public scripts: string[];
        constructor(option?: Object);
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
    class LayoutOptions extends Core.BaseOptions {
        public headOptions: Templates.HeadOptions;
        constructor(option?: Object);
    }
    class Layout {
        private head;
        public mobileLayout(data: LayoutOptions): {
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
declare module Templates {
    class GlutenTemplates {
        public layout: Templates.Layout;
    }
}
declare var module: any;
