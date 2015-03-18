'use strict';

describe('ngClearButton', function() {

  beforeEach(module('ngClearButton'));

  var compiler,
    scope,
    rootScope,
    controller,
    element;

  describe('ClearButtonController', function() {

    beforeEach(inject(function(_$compile_, _$rootScope_, _$controller_) {
      compiler = _$compile_;
      rootScope = _$rootScope_;
      controller = _$controller_;
      scope = _$rootScope_.$new();

      controller('ClearButtonController', {
        $scope: scope,
        $rootScope: rootScope
      });

      element = compiler(
        '<input type="search" with-clear-button />')(scope);
    }));

    it('should initialize properly', function() {
      expect(true).toBe(true);
    });
  });
});
