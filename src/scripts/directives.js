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
