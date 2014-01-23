var gluten = require('../../bin/gluten/gluten');
var templates = require('../../bin/templates/templates');
var options = {
    destJS : '../gen/tests/js/main.js',
    destCSS : '../gen/tests/css/main.css',
    destHTML : '../gen/tests/index.html'
}
var should = require('chai').should();
describe('Basic templates tests', function() {
    describe('Test HTML output', function() {
        it('Compile absurd template', function(done) {
            gluten.compileTemplate(templates.layout.mobileLayout(), options, function(processed) {
                done();
            });
        });
        it('compileWrite basicInputElement', function(done) {
            gluten.compileTemplateWrite(templates.layout.mobileLayout(), options, done);
        });
    })
})
