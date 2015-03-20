(function(window, angular, undefined) {
  'use strict';

  angular
    .module('angularClearButton.controllers', [])
    .controller('ClearButtonController', [
      '$scope', '$timeout', 'ClearButtonOptions', 'ClearButtonClassNames',
      function($scope, $timeout, ClearButtonOptions, ClearButtonClassNames) {
        $scope.inputBlurTimer = null;

        $scope.onButtonClick = function(button, model, input) {
          if (ClearButtonOptions.isVisible || button.hasClass(ClearButtonClassNames.FOCUSED_INPUT_BUTTON)) {
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
