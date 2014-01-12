var Head = (function () {
    function Head() {
    }
    Head.HeadMobile = function (data) {
        var result = {
            html: { head: [
                    'meta[charset="utf-8"]',
                    'title{' + data.title + '}',
                    'meta[name="description" content="' + data.description + '"]',
                    'meta[name="HandheldFriendly" content="True"]',
                    'meta[name="MobileOptimized" content="320"]',
                    'meta[name="viewport" content="width=device-width, initial-scale=1, minimal-ui"]',
                    'meta[http-equiv="cleartype" content="on"]'
                ] },
            css: {}
        };
        for (var i in data.stylesheets) {
            result.html.head.push('link[rel="stylesheet" href="' + data.stylesheets[i] + '"]');
        }
        for (var i in data.scripts) {
            result.html.head.push('script[src="' + data.scripts[i] + '"]');
        }
        return result;
    };
    return Head;
})();
exports.Head = Head;
