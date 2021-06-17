const { resolve } = require('path');

const { globals } = require('jest-preset-angular/jest-preset.js');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name, version } = require('../../package.json');

module.exports.reporters = [
  'default',
  [
    'jest-html-reporters',
    {
      publicPath: './report',
      filename: 'report.html',
      expand: true,
      hideIcon: true,
      pageTitle: `${name} - ${version}`,
      logoImgPath: undefined,
      openReport: true,
    },
  ],
];

module.exports.displayName = name;

module.exports.coverageThreshold = {
  global: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: 80,
  },
};

module.exports.globals = globals;

const root = resolve(__dirname, '../../');

module.exports.projects = [`${root}/config/test/jest.config.js`];
