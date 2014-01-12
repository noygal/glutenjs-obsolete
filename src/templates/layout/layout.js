var head = require('./head');

var Layout = (function () {
    function Layout() {
    }
    Layout.prototype.MobileLayout = function (options) {
        var result = {
            html: {
                _: '<!DOCTYPE html>',
                _include: head.Head.HeadMobile(options.headOptions),
                body: 'Test'
            },
            css: {
                body: {
                    backgroundColor: 'red'
                }
            }
        };
    };
    return Layout;
})();
exports.Layout = Layout;
