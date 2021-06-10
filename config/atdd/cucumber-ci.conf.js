const { config, capabilities } = require('./cucumber.conf');

capabilities.chromeOptions.args.push('--headless');
config.capabilities = capabilities;
config.chromeDriver = '/usr/bin/chromedriver';

exports.config = config;
