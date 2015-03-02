'use strict';

describe('Controller: NintendoCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewWebsiteApp'));

  var NintendoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NintendoCtrl = $controller('NintendoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
