'use strict';

describe('Controller: XboxCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewWebsiteApp'));

  var XboxCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    XboxCtrl = $controller('XboxCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
