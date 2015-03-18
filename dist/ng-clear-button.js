/**
 * ng-clear-button v0.1.0 (http://tamerayd.in/ng-clear-button)
 * Copyright 2015 Tamer Aydin (http://tamerayd.in)
 * Licensed under MIT
 */
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

(function(window, angular, undefined) {
  'use strict';

  angular
    .module('ngClearButton.directives', ['ngClearButton.controllers'])
    .directive('withClearButton', [
      function() {
        return {
          restrict: 'A',
          controller: 'ClearButtonController',
          link: function(scope, element, attrs) {

          }
        };
      }
    ]);

})(window, window.angular);

(function(window, angular, undefined) {
  'use strict';

  angular
    .module('ngClearButton', [
      'ngClearButton.controllers',
      'ngClearButton.directives'
    ]);

})(window, window.angular);
