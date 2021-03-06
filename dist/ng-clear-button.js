/**
 * ng-clear-button v0.6.0 (http://tamerayd.in/ng-clear-button)
 * Copyright 2015 Tamer Aydin (http://tamerayd.in)
 * Licensed under MIT
 */
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

(function(window, angular, undefined) {
  'use strict';

  angular
    .module('angularClearButton.controllers', [])
    .controller('ClearButtonController', [
      '$scope', '$timeout', 'ClearButtonOptions', 'ClearButtonClassNames',
      function($scope, $timeout, ClearButtonOptions, ClearButtonClassNames) {
        $scope.isButtonVisible = false;

        $scope.onMouseDown = function(button) {
            $scope.isButtonVisible =
              ClearButtonOptions.isVisible || button.hasClass(ClearButtonClassNames.FOCUSED_INPUT_BUTTON);
        };

        $scope.onMouseUp = function(model, input) {
          if ($scope.isButtonVisible) {
            $scope[model] = '';
            $scope.$apply();
          }
          $timeout(function() {
            input[0].focus();
          }, 0);
        };

        $scope.onInputFocus = function(button) {
          button.addClass(ClearButtonClassNames.FOCUSED_INPUT_BUTTON);
        };

        $scope.onInputBlur = function(button) {
          button.removeClass(ClearButtonClassNames.FOCUSED_INPUT_BUTTON);
        };
      }
    ]);

})(window, window.angular);

(function(window, angular, undefined) {
  'use strict';

  angular
    .module('angularClearButton.directives', [
      'angularClearButton.constants',
      'angularClearButton.controllers'
    ])
    .directive('withClearButton', [
      'ClearButtonOptions', 'ClearButtonClassNames',
      function(ClearButtonOptions, ClearButtonClassNames) {
        return {
          restrict: 'A',
          controller: 'ClearButtonController',
          link: function(scope, element, attrs) {
            var button,
              model = attrs.ngModel;

            try {
              button = angular.element(attrs.clearButtonHtml || ClearButtonOptions.buttonHtml);
            } catch (err) {
              throw '[ng-clear-button]: Please provide a valid HTML element for clear button!';
            }

            if (attrs.hasOwnProperty('clearButtonIsVisible')) {
              ClearButtonOptions.isVisible = true;
              button.addClass(ClearButtonClassNames.VISIBLE_BUTTON);
            }

            function onMouseDown() {
              scope.onMouseDown(button);
            }

            function onMouseUp() {
              scope.onMouseUp(model, element);
            }

            function onInputFocus() {
              scope.onInputFocus(button);
            }

            function onInputBlur() {
              scope.onInputBlur(button);
            }

            button.addClass(ClearButtonClassNames.BUTTON);
            element.addClass(ClearButtonClassNames.INPUT);
            element.after(button);

            button.bind('mousedown', onMouseDown);
            button.bind('mouseup', onMouseUp);
            element.bind('focus', onInputFocus);
            element.bind('blur', onInputBlur);

            var unwatch = scope.$watch(model, function(newValue) {
              var action = newValue ? 'addClass' : 'removeClass';

              button[action].call(button, ClearButtonClassNames.FILLED_INPUT_BUTTON);
            });

            scope.$on('$destroy', function() {
              button.unbind('mousedown', onMouseDown);
              button.unbind('mouseup', onMouseUp);
              element.unbind('focus', onInputFocus);
              element.unbind('blur', onInputBlur);
              unwatch();
            });
          }
        };
      }
    ]);

})(window, window.angular);

(function(window, angular, undefined) {
  'use strict';

  angular
    .module('angularClearButton', [
      'angularClearButton.constants',
      'angularClearButton.controllers',
      'angularClearButton.directives'
    ]);

})(window, window.angular);
