(function(window, angular, undefined) {
  'use strict';

  angular
    .module('angularClearButton.constants', [])
    .value('ClearButtonOptions', {
      isVisible: false,
      buttonHtml: '<span>&#10006;</span>'
    })
    .constant('ClearButtonClassNames', {
      INPUT: 'ng-clear-button__input',
      BUTTON: 'ng-clear-button__button',
      VISIBLE_BUTTON: 'ng-clear-button__button--visible',
      FILLED_INPUT_BUTTON: 'ng-clear-button__button--filled',
      FOCUSED_INPUT_BUTTON: 'ng-clear-button__button--focused'
    });

})(window, window.angular);
