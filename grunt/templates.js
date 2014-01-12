var options = require('../gluten.settings.js');

module.exports = function(grunt, moduleName) {
    grunt.registerTask('tpl-build', [
        'typescript:' + moduleName
    ]);
    grunt.registerTask('tpl-watch', ['watch:' + moduleName]);
    grunt.registerTask('tpl-clean', ['clean:' + moduleName]);
    grunt.registerTask('tpl-tests', ['mochaTest:' + moduleName]);
    return {
        typescript: {
            //Compile templates
            // src: [base_path + 'src/**/*.ts'],
            src: [options.templates.tsSrc + options.templates.tsFileName + '.ts'],
            // src: [options.templates.tsPattern],
            // src: [options.templates.tsSrc],
            dest: options.templates.tsDest,
            // dest: options.templates.tsDest + options.templates.tsFileName + '.js',
            options: {
                module: 'commonjs', //or amd
                target: 'es5', //or es3
                base_path: options.templates.tsBase,
                sourcemap: false,
                declaration: false
            }
            // }
        },
        watch: {
            files: [options.templates.tsPattern, options.templates.testsPattern],
            tasks: ['tpl-build', 'tpl-tests'],
            options: {
                interrupt: false,
                atBegin: true,
                spawn: true,
            },
        },
        mochaTest: {
            options: {
                reporter: 'spec'
            },
            src: [options.templates.testsPattern]
        },
        clean: [options.templates.tsDest + '*']
    }
};
