'use strict';

angular
  .module('demoApp', [
    'angularClearButton'
  ])
  .controller('demoMainController', function($scope) {
    $scope.anInputModel = 'focus on me...';
    $scope.initialized = true;
    $scope.destroy = function() {
      $scope.initialized = !$scope.initialized;
    };
  });
