var layout = require('./layout/layout');

var GlutenTemplates = (function () {
    function GlutenTemplates() {
    }
    GlutenTemplates.Layout = layout;
    return GlutenTemplates;
})();
exports.GlutenTemplates = GlutenTemplates;
