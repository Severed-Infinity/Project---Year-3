'use strict';

describe('Controller: PlaystationCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewWebsiteApp'));

  var PlaystationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlaystationCtrl = $controller('PlaystationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
