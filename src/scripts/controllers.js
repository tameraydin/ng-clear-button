(function(window, angular, undefined) {
  'use strict';

  angular
    .module('angularClearButton.controllers', [])
    .controller('ClearButtonController', [
      '$scope', '$timeout', 'ClearButtonOptions', 'ClearButtonDefaults', 'ClearButtonClassNames',
      function($scope, $timeout, ClearButtonOptions, ClearButtonDefaults, ClearButtonClassNames) {
        $scope.inputBlurTimer = null;

        $scope.onButtonClick = function(button, model, input) {
          if (ClearButtonOptions.isVisible || button.hasClass(ClearButtonClassNames.FOCUSED_INPUT_BUTTON)) {
            $scope[model] = '';
            $scope.$apply();
          }
          input[0].focus();
        };

        $scope.onInputFocus = function(button) {
          $timeout.cancel($scope.inputBlurTimer);
          button.addClass(ClearButtonClassNames.FOCUSED_INPUT_BUTTON);
        };

        $scope.onInputBlur = function(button) {
          $scope.inputBlurTimer = $timeout(function() {
            button.removeClass(ClearButtonClassNames.FOCUSED_INPUT_BUTTON);
          }, ClearButtonDefaults.BUTTON_HIDE_TIMEOUT);
        };
      }
    ]);

})(window, window.angular);
