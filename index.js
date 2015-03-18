'use strict';

angular
  .module('demoApp', [
    'ngClearButton'
  ])
  .controller('demoMainController', function($scope) {
    $scope.anInputModel = 'test';
    $scope.initialized = true;
    $scope.destroy = function() {
      $scope.initialized = !$scope.initialized;
    };
  });
