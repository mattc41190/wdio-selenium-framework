exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],

    maxInstances: 1,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    bail: 0,
    screenshotPath: './errorShots/',

    baseUrl: 'http://beesbeesbees.com/',
    waitforTimeout: 10000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    services: ['selenium-standalone'],
    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd'
    }
}
