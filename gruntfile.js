var base_path = '';
module.exports = function(grunt) {
    grunt.initConfig({
        'tpm-install': {
            options: {
                dev: true
            },
            all: {
                src: 'package.json',
                dest: base_path + 'lib/ts-types/'
            }
        },

        'tpm-index': {
            all: {
                src: [base_path + 'lib/ts-types/**/*.d.ts'],
                dest: base_path + 'lib/ts-types/all.d.ts'
            }
        },
        typescript: {
            //Compile gluten
            gluten: {
                // src: [base_path + 'src/**/*.ts'],
                src: [base_path + 'src/gluten.ts'],
                dest: base_path + 'bin/gluten.js',
                options: {
                    module: 'commonjs', //or amd
                    target: 'es5', //or es3
                    base_path: base_path + 'src/',
                    sourcemap: false,
                    declaration: true
                }
            }
        },
        watch: {
            gluten: {
                files: [base_path + 'src/**/*.ts', base_path + 'tests/**/*.js'],
                tasks: ['typescript:gluten', 'mochaTest:gen'],
                options: {
                    interrupt: false,
                    atBegin: true,
                    spawn: true,
                },
            },
        },
        // Configure a mochaTest task
        mochaTest: {
            gen: {
                options: {
                    reporter: 'spec'
                },
                src: ['tests/gen-*-test.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('typescript-tpm');

    grunt.registerTask('setup', ['tpm-install', 'tpm-index'])
    grunt.registerTask('dev', 'watch:gluten');
    grunt.registerTask('build', 'typescript:gluten');
    grunt.registerTask('default', 'mochaTest');

};
