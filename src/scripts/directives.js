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

            function onButtonClick() {
              scope.onButtonClick(button, model, element);
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
