var options = require('../gluten.settings.js');

module.exports = function(grunt, moduleName) {
    grunt.registerTask('setup-ts-types', [
        'tpm-install:' + moduleName,
        'tpm-index:' + moduleName
    ]);
    // grunt.registerTask('setup', ['setup-ts-types']);
    grunt.registerTask('clean-ts-types', ['clean:' + moduleName]);
    grunt.registerTask('bower-create-settings', function() {
        grunt.file.write('bower.json', JSON.stringify(options.bower.file));
    });
    grunt.registerTask('bower-clean', 'bower:' + moduleName + '$clean');
    grunt.registerTask('bower-install', 'bower:' + moduleName + '$install');
    grunt.registerTask('bower-full', ['bower-create-settings', 'bower-clean', 'bower-install']);
    
    return {
        'tpm-install': {
            options: {
                dev: true,
            },
            src: options.packageSrc,
            dest: options.tsTypes.dest
        },
        'tpm-index': {
            src: [options.tsTypes.indexSrc],
            dest: options.tsTypes.indexDest
        },
        bower$install: {
            options: {
                targetDir: options.bower.targetDest,
                layout: 'byComponent',
                install: true,
                cleanTargetDir: false,
                cleanBowerDir: false,
                copy: true,
                bowerOptions: {}
            }
        },
        bower$clean: {
            options: {
                targetDir: options.bower.targetDest,
                layout: 'byComponent',
                install: false,
                cleanTargetDir: true,
                cleanBowerDir: true,
                copy: false,
                bowerOptions: {}
            }
        },
        clean: [options.tsTypes.dest]
    }
};
