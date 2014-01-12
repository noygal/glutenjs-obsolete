var options = require('../gluten.settings.js');

module.exports = function(grunt, moduleName) {
    grunt.registerTask('setup-ts-types', [
        'tpm-install:' + moduleName,
        'tpm-index:' + moduleName
    ]);
    grunt.registerTask('setup', ['setup-ts-types']);
    grunt.registerTask('setup-clean', ['clean:' + moduleName]);
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
        clean : [options.tsTypes.dest]
    }
};
