# ng-clear-button [![Build Status](http://img.shields.io/travis/tameraydin/ng-clear-button/master.svg?style=flat-square)](https://travis-ci.org/tameraydin/ng-clear-button) [![Code Climate](http://img.shields.io/codeclimate/github/tameraydin/ng-clear-button.svg?style=flat-square)](https://codeclimate.com/github/tameraydin/ng-clear-button/dist/ng-clear-button.js) [![Coverage Status](https://img.shields.io/coveralls/tameraydin/ng-clear-button/master.svg?style=flat-square)](https://coveralls.io/r/tameraydin/ng-clear-button?branch=master)

[Demo](http://tamerayd.in/ng-clear-button/)

## Usage

Install **ng-clear-button** via [Bower](http://bower.io):
```bash
bower install ng-clear-button --production
```

Include main files:
```html
<link rel="stylesheet" href="bower_components/ng-clear-button/dist/ng-clear-button.min.css">
<script src="bower_components/ng-clear-button/dist/ng-clear-button.min.js"></script>
```

Include ``angularClearButton`` module as a dependency into your app:
```javascript
angular
  .module('yourApp', [
    'angularClearButton'
  ]);
```

Place ``with-clear-button`` attribute into your HTML input element:
```html
<input type="search" with-clear-button />
<!-- with optional attributes:
  clear-button-html="<img src=\"custom-button.png\" />"
  clear-button-is-visible
-->
```

## Development

See the instructions at [ng-pack](https://github.com/tameraydin/ng-pack#usage).

## License

MIT [http://tameraydin.mit-license.org/](http://tameraydin.mit-license.org/)

## TODO

- Add more unit tests
