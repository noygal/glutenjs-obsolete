export interface HeadOptions {
    title : string; // Page title
    description: string; // Page description
    stylesheets : string[]; // Array of style sheets (*.css)
    scripts : string[]; // Array of script (*.js)
}
export class Head {
    public static HeadMobile(data : HeadOptions) {
        var result = {
            html : {head : [
                //based on boilerplate mobile
                'meta[charset="utf-8"]',
                'title{' + data.title + '}',
                'meta[name="description" content="' + data.description + '"]',
                'meta[name="HandheldFriendly" content="True"]',
                'meta[name="MobileOptimized" content="320"]',
                'meta[name="viewport" content="width=device-width, initial-scale=1, minimal-ui"]',
                'meta[http-equiv="cleartype" content="on"]'
            ]},
            css: {}
        }
        ;
        for (var i in data.stylesheets) {
            result.html.head.push('link[rel="stylesheet" href="' + data.stylesheets[i] + '"]');
        }
        for (var i in data.scripts) {
            result.html.head.push('script[src="' + data.scripts[i] + '"]');
        }
        return result;
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