module Templates {

    export class HeadOptions extends Core.BaseOptions {
        // Page title
        title: string = 'Hello world';
        // Page description
        description: string = 'GlutenJS Hello world';
        // Array of style sheets (*.css)
        stylesheets: string[] = ['css/main.css'];
        // Array of script (*.js)
        scripts: string[] = ['js/main.js'];
        constructor(option: Object = {}) {
            super();
            this.margeOptions(option);
        }
    }

    export class Head {
        public headMobile(data: HeadOptions) {
            var options = new HeadOptions(data);
            var result = {
                html: {
                    head: {
                        //based on boilerplate mobile
                        'meta[charset="utf-8"]': '',
                        'title': options.title,
                        'meta[name="description"]': TemplateUtils.SetAttributes({ content: options.description }),
                        'meta[name="HandheldFriendly" content="True"]': '',
                        'meta[name="MobileOptimized" content="320"]': '',
                        'meta[name="viewport" content="width=device-width, initial-scale=1, minimal-ui"]': '',
                        'meta[http-equiv="cleartype" content="on"]': '',
                        //_: '<!-- bower:js --><!-- endbower --><!-- bower:css --><!-- endbower -->' 
                    }
                },
                css: {}
            }
            ;
            for (var i in options.stylesheets) {
                result.html.head['link[rel="stylesheet" href="' + options.stylesheets[i] + '"]'] = '';
            }
            for (var i in options.scripts) {
                //Added space to provent script scr bug (no end tag)
                result.html.head['script[src="' + options.scripts[i] + '"]'] = ' ';
            }
            return result;
        }
    }
}

// <head>
//         <meta charset="utf-8">
//         <title></title>
//         <meta name="description" content="">
//         <meta name="HandheldFriendly" content="True">
//         <meta name="MobileOptimized" content="320">
//         <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
//         <meta http-equiv="cleartype" content="on">

//         <link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/touch/apple-touch-icon-144x144-precomposed.png">
//         <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/touch/apple-touch-icon-114x114-precomposed.png">
//         <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/touch/apple-touch-icon-72x72-precomposed.png">
//         <link rel="apple-touch-icon-precomposed" href="img/touch/apple-touch-icon-57x57-precomposed.png">
//         <link rel="shortcut icon" sizes="196x196" href="img/touch/touch-icon-196x196.png">
//         <link rel="shortcut icon" href="img/touch/apple-touch-icon.png">

//         <!-- Tile icon for Win8 (144x144 + tile color) -->
//         <meta name="msapplication-TileImage" content="img/touch/apple-touch-icon-144x144-precomposed.png">
//         <meta name="msapplication-TileColor" content="#222222">

//         <!-- Add to homescreen for Chrome on Android -->
//         <!--
//         <meta name="mobile-web-app-capable" content="yes">
//         -->

//         <!-- For iOS web apps. Delete if not needed. https://github.com/h5bp/mobile-boilerplate/issues/94 -->
//         <!--
//         <meta name="apple-mobile-web-app-capable" content="yes">
//         <meta name="apple-mobile-web-app-status-bar-style" content="black">
//         <meta name="apple-mobile-web-app-title" content="">
//         -->

//         <!-- This script prevents links from opening in Mobile Safari. https://gist.github.com/1042026 -->
//         <!--
//         <script>(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")</script>
//         -->

//         <link rel="stylesheet" href="css/normalize.css">
//         <link rel="stylesheet" href="css/main.css">
//         <script src="js/vendor/modernizr-2.7.1.min.js"></script>
//     </head>
