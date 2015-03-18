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
