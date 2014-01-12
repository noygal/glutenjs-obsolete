var gruntModules = require('grunt-modules');
module.exports = function(grunt) {
    grunt.initConfig({
       
    });

    gruntModules(grunt, {
        setup : require('./grunt/setup.js'),
        gluten : require('./grunt/gluten.js'),
        templates : require('./grunt/templates.js'),
        cordova : require('./grunt/cordova.js')
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
