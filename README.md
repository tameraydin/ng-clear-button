# ng-clear-button [![Build Status](http://img.shields.io/travis/tameraydin/ng-clear-button/master.svg?style=flat-square)](https://travis-ci.org/tameraydin/ng-clear-button) [![Code Climate](http://img.shields.io/codeclimate/github/tameraydin/ng-clear-button.svg?style=flat-square)](https://codeclimate.com/github/tameraydin/ng-clear-button/dist/ng-clear-button.js) [![Coverage Status](https://img.shields.io/coveralls/tameraydin/ng-clear-button/master.svg?style=flat-square)](https://coveralls.io/r/tameraydin/ng-clear-button?branch=master)

[Demo](http://tamerayd.in/ng-clear-button/)

## Usage

Install ng-clear-button via [Bower](http://bower.io):
```bash
bower install ng-clear-button --production
```

Include main javascript file:
```html
<script src="bower_components/ng-clear-button/dist/ng-clear-button.min.js"></script>
```

Include ``ngClearButton`` module as a dependency into your app:
```javascript
angular
  .module('yourApp', [
    'ngClearButton'
  ]);
```

Place ``with-clear-button`` attribute into your HTML input element:
```html
<input type="search" with-clear-button />
```

## Development

1. Clone the repo or [download](https://github.com/tameraydin/ng-clear-button/archive/master.zip).
2. ``npm install && bower install``
3. Setup E2E testing environment: ``npm install -g protractor && webdriver-manager update --standalone``
4. Run ``gulp watch`` and open [http://localhost:8080/demo/index.html](http://localhost:8080/demo/index.html)
5. Use ``gulp test-unit`` or ``gulp test-e2e`` to execute your tests
6. Finally, be sure that selenium driver is up: ``webdriver-manager start`` and run ``gulp build``

## License

MIT [http://tameraydin.mit-license.org/](http://tameraydin.mit-license.org/)
