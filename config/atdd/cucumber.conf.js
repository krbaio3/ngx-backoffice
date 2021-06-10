const { join } = require('path');
const { resolveFromRootPath } = require('../helpers/helper');
const { emptyDirSync, ensureFileSync } = require('fs-extra');
const reporter = require('cucumber-html-reporter');
const cucumberReport = 'cucumber_report';

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
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4500/',
  capabilities,
  // set to "custom" instead of cucumber.
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  // require feature files
  specs: ['../../cucumber/feature/*.feature'],

  // Options to be passed to Cucumber.
  cucumberOpts: {
    // require step definitions
    require: ['../../cucumber/steps/*.step.ts', './setup.ts'],
    // How to format features (progress, summary, pretty, json)
    format: [`json:${resolveFromRootPath(cucumberReport, 'results.json')}`],
    compiler: [],
  },
  // Enable TypeScript for the tests
  onPrepare: () => {
    emptyDirSync('./cucumber_report');
    ensureFileSync('./cucumber_report/results.json');
    require('ts-node').register({
      transpileOnly: true,
      project: join('config/atdd', './tsconfig.atdd.json'),
    });
  },
  onCleanUp: (exitCode) => {},

  onComplete: () => {
    const options = {
      theme: 'bootstrap',
      jsonFile: resolveFromRootPath('cucumber_report', 'results.json'),
      output: resolveFromRootPath('cucumber_report', 'cucumber_report.html'),
      scenarioTimestamp: true,
      reportSuiteAsScenarios: true,
      launchReport: false,
    };

    reporter.generate(options);
  },
};

module.exports = {
  capabilities,
  config,
};
