var options = require('../gluten.settings.js');

module.exports = function(grunt, moduleName) {
    grunt.registerTask('cordova-clean-all', [
        'clean:' + moduleName + '$cordova'
    ]);
    grunt.registerTask('cordova-clean', [
        'clean:' + moduleName + '$www'
    ]);
    grunt.registerTask('cordova-copy', [
        'copy:' + moduleName
    ]);
    grunt.registerTask('cordova-watch', [
        'watch:' + moduleName
    ]);
    grunt.registerTask('cordova-setup-all', [
        'cordova-clean-all',
        'cordovacli:' + moduleName + '$create',
        'cordovacli:' + moduleName + '$add_platforms',
        'cordovacli:' + moduleName + '$add_plugins',
        'copy:' + moduleName,
        'cordovacli:' + moduleName + '$build'
    ]);
    grunt.registerTask('cordova-setup', [
        'cordovacli:' + moduleName + '$rm_plugins',
        'cordovacli:' + moduleName + '$rm_platforms',
        'cordovacli:' + moduleName + '$add_platforms',
        'cordovacli:' + moduleName + '$add_plugins',
        'cordovacli:' + moduleName + '$build'
    ]);
    grunt.registerTask('cordova-prepare', [
        'cordovacli:' + moduleName + '$prepare'
    ]);
    return {
        watch: {
            files: [options.genDest + '**/*'],
            tasks: ['cordova-copy', 'cordova-prepare'],
            options: {
                interrupt: true,
                // atBegin: true,
                // spawn: true,
            }
        },
        copy: {
            src: options.genDest + '*',
            dest: options.cordova.www,
        },
        clean$www: [options.cordova.www + '*'],
        clean$cordova: [options.cordova.base],
        cordovacli$create: {
            options: {
                path: options.cordova.base,
                command: 'create',
                id: options.cordova.id,
                name: options.cordova.name
            }
        },
        cordovacli$add_platforms: {
            options: {
                path: options.cordova.base,
                command: 'platform',
                action: 'add',
                platforms: options.cordova.platforms
            }
        },
        cordovacli$rm_platforms: {
            options: {
                path: options.cordova.base,
                command: 'platform',
                action: 'rm',
                platforms: options.cordova.platforms
            }
        },
        cordovacli$add_plugins: {
            options: {
                path: options.cordova.base,
                command: 'plugin',
                action: 'add',
                plugins: options.cordova.plugins
            }
        },
        cordovacli$rm_plugins: {
            options: {
                path: options.cordova.base,
                command: 'plugin',
                action: 'rm',
                plugins: options.cordova.plugins
            }
        },
        cordovacli$prepare: {
            options: {
                path: options.cordova.base,
                command: 'prepare',
                platforms: options.cordova.platforms
            }
        },
        cordovacli$build: {
            options: {
                path: options.cordova.base,
                command: 'build',
                platforms: options.cordova.platforms
            }
        },
        cordovacli$emulate_android: {
            options: {
                path: options.cordova.base,
                command: 'emulate',
                platforms: ['android'],
                //args: ['--target', 'Nexus4-4.0.3']
            }
        },
        cordovacli$emulate_ios: {
            options: {
                path: options.cordova.base,
                command: 'emulate',
                platforms: ['ios'],
                //args: ['--target', 'Nexus4-4.0.3']
            }
        }
    }
};
