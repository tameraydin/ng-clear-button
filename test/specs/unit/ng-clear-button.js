'use strict';

describe('ngClearButton', function() {

  beforeEach(module('angularClearButton'));

  var compiler,
    scope,
    rootScope,
    controller,
    button,
    element,
    ClearButtonOptions,
    ClearButtonClassNames;

  describe('ClearButtonController', function() {

    beforeEach(function() {
      inject(function($injector, _$rootScope_, _$controller_) {
        ClearButtonOptions = $injector.get('ClearButtonOptions');
        ClearButtonClassNames = $injector.get('ClearButtonClassNames');
        rootScope = _$rootScope_;
        controller = _$controller_;
        scope = _$rootScope_.$new();

        controller('ClearButtonController', {
          $scope: scope,
          $rootScope: rootScope,
          ClearButtonOptions: ClearButtonOptions,
          ClearButtonClassNames: ClearButtonClassNames
        });
      });

      button = angular.element('<span>button</span>');
    });

    it('initial values should be set', function() {
      expect(scope.isButtonVisible).toBeFalsy();
    });

    it('onMouseDown should work', function() {
      ClearButtonOptions.isVisible = true;

      scope.onMouseDown(button);
      expect(scope.isButtonVisible).toBeTruthy();

      ClearButtonOptions.isVisible = false;
      scope.onMouseDown(button);
      expect(scope.isButtonVisible).toBeFalsy();

      button.addClass(ClearButtonClassNames.FOCUSED_INPUT_BUTTON);
      scope.onMouseDown(button);
      expect(scope.isButtonVisible).toBeTruthy();
    });

    it('onMouseUp should work', function() {
      // TODO
    });

    it('onInputFocus should work', function() {
      scope.onInputFocus(button);
      expect(button.hasClass(ClearButtonClassNames.FOCUSED_INPUT_BUTTON)).toBeTruthy();
    });

    it('onInputBlur should work', function() {
      scope.onInputFocus(button);
      scope.onInputBlur(button);
      expect(button.hasClass(ClearButtonClassNames.FOCUSED_INPUT_BUTTON)).toBeFalsy();
    });
  });

  describe('withClearButton', function() {

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
        '<div><input type="search" with-clear-button /></div>')(scope);
    }));

    // TODO
    it('should initialize properly', function() {
      expect(element[0].innerHTML).toContain('ng-clear-button__input');
      expect(element[0].innerHTML).toContain('ng-clear-button__button');
    });
  });
});
