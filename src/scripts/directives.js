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
