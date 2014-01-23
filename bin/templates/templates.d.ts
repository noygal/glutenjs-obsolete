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
                head: {
                    'meta[charset="utf-8"]': string;
                    'title': string;
                    'meta[name="description"]': {
                        _attrs: {
                            'content': string;
                        };
                    };
                    'meta[name="HandheldFriendly" content="True"]': string;
                    'meta[name="MobileOptimized" content="320"]': string;
                    'meta[name="viewport" content="width=device-width, initial-scale=1, minimal-ui"]': string;
                    'meta[http-equiv="cleartype" content="on"]': string;
                };
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
                        head: {
                            'meta[charset="utf-8"]': string;
                            'title': string;
                            'meta[name="description"]': {
                                _attrs: {
                                    'content': string;
                                };
                            };
                            'meta[name="HandheldFriendly" content="True"]': string;
                            'meta[name="MobileOptimized" content="320"]': string;
                            'meta[name="viewport" content="width=device-width, initial-scale=1, minimal-ui"]': string;
                            'meta[http-equiv="cleartype" content="on"]': string;
                        };
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
