(function(window, angular, undefined) {
  'use strict';

  angular
    .module('ngClearButton.constants', [])
    .constant('ClearButtonDefaults', {
      BUTTON: '<span>&#10006;</span>'
    })
    .constant('ClearButtonClassNames', {
      INPUT: 'ng-clear-button__input',
      BUTTON: 'ng-clear-button__button',
      FILLED_INPUT_BUTTON: 'ng-clear-button__button--filled',
      FOCUSED_INPUT_BUTTON: 'ng-clear-button__button--focused'
    });

})(window, window.angular);
