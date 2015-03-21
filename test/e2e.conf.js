exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/e2e/ng-clear-button.js'],
  capabilities: {
    'browserName': 'firefox'
  }
};
