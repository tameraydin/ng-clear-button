(function(window, angular, undefined) {
  'use strict';

  angular
    .module('ngClearButton.controllers', [])
    .controller('ClearButtonController', ['$scope',
      function($scope) {
        $scope.button = null;
      }
    ]);

})(window, window.angular);
