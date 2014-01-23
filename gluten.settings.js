var base_path = __dirname + '/';
//console.log(base_path);
module.exports = {
    packageSrc: base_path + 'package.json',
    genDest: base_path + 'gen/',
    tsTypes: {
        dest: base_path + 'lib/ts-types/',
        indexSrc: base_path + 'lib/ts-types/**/*.d.ts',
        indexDest: base_path + 'lib/ts-types/all.d.ts'
    },
    gluten: {
        tsFileName: 'gluten',
        // tsBase: base_path + 'src/',
        tsBase: 'src/',
        tsSrc: base_path + 'src/',
        tsDest: base_path + 'bin/gluten/',
        tsPattern: [base_path + 'src/core/**/*.ts', base_path + 'src/gluten/**/*.ts'],
        testsPattern: base_path + 'tests/gluten/gluten-*.js',
    },
    templates: {
        tsFileName: 'templates',
        // tsBase: base_path + 'src/templates/',
        tsBase: 'src/templates/',
        tsSrc: base_path + 'src/templates/',
        tsDest: base_path + 'bin/templates/',
        tsPattern: [base_path + 'src/core/**/*.ts', base_path + 'src/templates/**/*.ts'],
        testsPattern: base_path + 'tests/templates/templates-*.js',
    },
    // tests: {
    //     pattern: base_path + 'tests/gen-*.js'
    // },
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
