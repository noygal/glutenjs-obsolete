var gluten = require('../bin/gluten');

var samples = require('./samples/gen-samples');

var should = require('chai').should();
describe('Basic generator tests', function() {
    describe('Test HTML output', function() {
        it('compile basicInputElement', function(done) {
            gluten.compile(samples.basicInputElement, {}, function(processed) {
            	// console.log(samples.basicInputElement);
                //console.log(processed.html);
                done();
            });
        });
        it('compileWrite basicInputElement', function(done) {
            gluten.compileWrite(samples.basicInputElement, {});
            done();
        });
    })
})
