var options = require('../gluten.settings.js');

module.exports = function(grunt, moduleName) {
    grunt.registerTask('gluten-build', [
        'typescript:' + moduleName
    ]);
    grunt.registerTask('gluten-watch', ['watch:' + moduleName]);
    grunt.registerTask('gluten-clean', ['clean:' + moduleName]);
    grunt.registerTask('gluten-tests', ['mochaTest:' + moduleName]);
    return {
        typescript: {
            //Compile gluten
            // src: [base_path + 'src/**/*.ts'],
            src: [options.gluten.tsSrc + options.gluten.tsFileName + '.ts'],
            dest: options.gluten.tsDest + options.gluten.tsFileName + '.js',
            options: {
                module: 'commonjs', //or amd
                target: 'es5', //or es3
                base_path: options.gluten.tsBase,
                sourcemap: false,
                declaration: true
            }
            // }
        },
        watch: {
            files: [options.gluten.tsPattern, options.gluten.testsPattern],
            tasks: ['gluten-build', 'gluten-tests'],
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
            src: [options.gluten.testsPattern]
        },
        clean: [options.gluten.tsDest + '*']
    }
};
