var gruntModules = require('grunt-modules');
module.exports = function(grunt) {
    grunt.initConfig({
        'bower-install': {
            target: {

                // Point to the files that should be updated when
                // you run `grunt bower-install`
                src: ['gen/tests/index.html'],

                // Optional:
                // ---------
                cwd: __dirname,
                ignorePath: __dirname + '/gen',
                // exclude: [],
                // fileTypes: {}
            }
        }
    });

    gruntModules(grunt, {
        setup: require('./grunt/setup.js'),
        gluten: require('./grunt/gluten.js'),
        templates: require('./grunt/templates.js'),
        cordova: require('./grunt/cordova.js')
    });

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', 'typescript-tpm', '!grunt-modules']
    });

    // grunt.registerTask('dev', 'watch:gluten');
    // grunt.registerTask('build', 'typescript:gluten');
    // grunt.registerTask('buildM', 'cordovacli:cordova');
    // grunt.registerTask('default', 'mochaTest');
    // grunt.registerTask('default', 'echo');


};
