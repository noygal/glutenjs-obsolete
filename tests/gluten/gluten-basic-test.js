var gluten = require('../../bin/gluten/gluten');

var samples = require('./gluten-samples');
var options = {
    destJS : '../gen/tests/js/main.js',
    destCSS : '../gen/tests/css/main.css',
    destHTML : '../gen/tests/index.html'
}

var should = require('chai').should();
describe('Basic generator tests', function() {
    describe('Test HTML output', function() {
        it('compile basicInputElement', function(done) {
            gluten.compile(samples.basicInputElement, options, function(processed) {
            	// console.log(samples.basicInputElement);
                //console.log(processed.html);
                // console.log(options);
                done();
            });
        });
        it('compileWrite basicInputElement', function(done) {
            gluten.compileWrite(samples.basicInputElement, options);
            done();
        });
    })
})
