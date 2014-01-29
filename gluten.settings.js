var package = require('./package');
var base_path = __dirname + '/';
var gen_path = base_path + 'gen/';
//console.log(base_path);
module.exports = {
    packageSrc: base_path + 'package.json',
    genDest: gen_path,
    tsTypes: {
        dest: base_path + 'lib/ts-types/',
        indexSrc: base_path + 'lib/ts-types/**/*.d.ts',
        indexDest: base_path + 'lib/ts-types/all.d.ts'
    },
    gluten: {
        tsFileName: 'gluten',
        tsBase: 'src/gluten/',
        tsSrc: base_path + 'src/gluten/',
        tsDest: base_path + 'bin/gluten/',
        tsPattern: [base_path + 'src/core/**/*.ts', base_path + 'src/gluten/**/*.ts'],
        testsPattern: base_path + 'tests/gluten/gluten-*.js',
    },
    templates: {
        tsFileName: 'templates',
        tsBase: 'src/templates/',
        tsSrc: base_path + 'src/templates/',
        tsDest: base_path + 'bin/templates/',
        tsPattern: [base_path + 'src/core/**/*.ts', base_path + 'src/templates/**/*.ts'],
        testsPattern: base_path + 'tests/templates/templates-*.js',
    },
    bower: {
        targetDest : gen_path + 'lib/',
        file: {
            name: package.name,
            version: package.version,
            ignore: [],
            dependencies: {
                "angular": "1.2.x",
                "angular-ui-router": "0.2.7",
                "normalize-css": "2.1.x"
            },
            devDependencies: {

            }
        }
    },
    cordova: {
        base: base_path + 'cordova/',
        www: base_path + 'cordova/www/',
        id: 'com.wavesoft.test',
        name: 'Test',
        platforms: ['ios', 'android'],
        plugins: ['device']
        // plugins: [
        //                 'battery-status',
        //                 'camera',
        //                 'console',
        //                 'contacts',
        //                 'device',
        //                 'device-motion',
        //                 'device-orientation',
        //                 'dialogs',
        //                 'file',
        //                 'geolocation',
        //                 'globalization',
        //                 'inappbrowser',
        //                 'media',
        //                 'media-capture',
        //                 'network-information',
        //                 'splashscreen',
        //                 'vibration'
        //             ]
    }
};
