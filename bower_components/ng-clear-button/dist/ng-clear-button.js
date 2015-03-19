/**
 * ng-clear-button v0.2.0 (http://tamerayd.in/ng-clear-button)
 * Copyright 2015 Tamer Aydin (http://tamerayd.in)
 * Licensed under MIT
 */
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

(function(window, angular, undefined) {
  'use strict';

  angular
    .module('ngClearButton.controllers', [])
    .controller('ClearButtonController', ['$scope', 'ClearButtonClassNames',
      function($scope, ClearButtonClassNames) {

        $scope.onButtonClick = function(model, input) {
          $scope[model] = '';
          $scope.$apply();
          input[0].focus();
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
    .module('ngClearButton.directives', [
      'ngClearButton.constants',
      'ngClearButton.controllers'
    ])
    .directive('withClearButton', ['ClearButtonDefaults', 'ClearButtonClassNames',
      function(ClearButtonDefaults, ClearButtonClassNames) {
        return {
          restrict: 'A',
          controller: 'ClearButtonController',
          link: function(scope, element, attrs) {
            var button,
              model = attrs.ngModel;

            try {
              button = angular.element(attrs.clearButtonHTML || ClearButtonDefaults.BUTTON);
            } catch (err) {
              throw '[ng-clear-button]: Please provide a valid HTML element for clear button!';
            }

            function onButtonClick() {
              scope.onButtonClick(model, element);
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

            button.bind('click', onButtonClick);
            element.bind('focus', onInputFocus);
            element.bind('blur', onInputBlur);

            var unwatch = scope.$watch(model, function(newValue) {
              var action = newValue ? 'addClass' : 'removeClass';

              button[action].call(button, ClearButtonClassNames.FILLED_INPUT_BUTTON);
            });

            scope.$on('$destroy', function() {
              button.unbind('click', onButtonClick);
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
    .module('ngClearButton', [
      'ngClearButton.constants',
      'ngClearButton.controllers',
      'ngClearButton.directives'
    ]);

})(window, window.angular);
