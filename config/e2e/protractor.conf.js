/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
/* eslint-disable indent */
/**
 * @type { import("protractor").Config }
 */
const { resolve } = require('path');
const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
const { JUnitXmlReporter } = require('jasmine-reporters');
const { emptyDirSync, createWriteStream } = require('fs-extra');
const HTMLReport = require('protractor-html-reporter-2');
const { resolveFromRootPath } = require('../helpers/helper');

// https://sites.google.com/a/chromium.org/chromedriver/capabilities
const capabilities = {
  browserName: 'chrome',
  // https://github.com/bayandin/chromedriver/commit/22fb21bc10fbaf67e6316cbf1cc71dbf310cf7a9#diff-1a3ffafe40de9dd2731f39f136f20189
  useAutomationExtension: false,
  // https://peter.sh/experiments/chromium-command-line-switches/
  chromeOptions: {
    excludeSwitches: ['enable-automation'],
    args: [
      '--disable-gpu',
      '-disable-dev-shm-usage',
      '--no-sandbox',
      '-disable-popup-blocking',
      '--start-maximized',
      '--disable-web-security',
      '--allow-running-insecure-content',
      '--disable-automation',
    ],
  },
};

const config = {
  logLevel: 'DEBUG',
  allScriptsTimeout: 11000,
  specs: [`${resolveFromRootPath('e2e/src/**/*.e2e-spec.ts')}`],
  capabilities,
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print() {},
  },
  async onPrepare() {
    require('ts-node').register({
      project: resolveFromRootPath('./config/e2e/tsconfig.e2e.json'),
    });

    // Getting CLI report
    jasmine.getEnv().addReporter(
      //@ts-ignore
      new SpecReporter({
        // Defaults: https://github.com/bcaudan/jasmine-spec-reporter#default-options
        // Configuration: https://github.com/bcaudan/jasmine-spec-reporter/blob/master/src/configuration.ts
        suite: {
          displayNumber: true, // display each suite number (hierarchical)
        },
        spec: {
          displayPending: true, // display each pending spec
          displayDuration: true, // display each spec duration
          displayStacktrace: StacktraceOption.PRETTY, // display each stack trace
          displayErrorMessages: true,
          displayFailed: true,
          displaySuccessful: true,
        },
        summary: {
          displaySuccessful: true, // display summary of all successes after execution
          displayFailed: true, // display summary of all failures after execution
          displayPending: true, // display summary of all pending specs after execution
          displayDuration: true,
          displayErrorMessages: true,
          displayStacktrace: StacktraceOption.PRETTY,
        },
        prefixes: {
          successful: '✓ ',
          failed: '✗ ',
          pending: 'Pending-',
        },
      }),
    );
    // Getting XML Report
    jasmine.getEnv().addReporter(
      new JUnitXmlReporter({
        consolidateAll: true,
        filePrefix: 'report.xml',
        savePath: `${resolveFromRootPath('./e2e_report')}`,
      }),
    );

    //Getting screenshots

    emptyDirSync(`${resolveFromRootPath('./e2e_report/screenshots/')}`);
    jasmine.getEnv().addReporter({
      //@ts-ignore
      specDone: async ({ status, fullName }) => {
        if (status == 'failed') {
          //@ts-ignore
          const caps = await browser.getCapabilities();
          const browserName = caps.get('browserName');
          //@ts-ignore
          const png = await browser.takeScreenshot();
          const stream = createWriteStream(
            resolve(
              './e2e_report/screenshots/',
              `${browserName}-${fullName}.png`,
            ),
          );
          stream.write(Buffer.from(png, 'base64'));
          stream.end();
        }
      },
    });
  },
  /** Creo reporte html con protractor */
  async onComplete() {
    // @ts-ignore
    const caps = await browser.getCapabilities();
    const browserName = caps.get('browserName');
    const browserVersion = caps.get('version');
    const platform = caps.get('platform');

    /** Configuro la salida */
    const e2eConfig = {
      reportTitle: 'Protractor Test Execution Report',
      outputPath: `${resolveFromRootPath('./e2e_report')}`,
      outputFilename: 'ProtractorTestReport',
      screenshotPath: `${resolveFromRootPath('./e2e_report', 'screenshots')}`, //'./e2e_report/screenshots',
      testBrowser: browserName,
      browserVersion,
      modifiedSuiteName: false,
      screenshotsOnlyOnFailure: true,
      testPlatform: platform,
    };
    new HTMLReport().from(
      `${resolveFromRootPath('./e2e_report', 'report.xml')}`,
      e2eConfig,
    );
  },
};

module.exports = {
  config,
  capabilities,
};
