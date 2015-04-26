'use strict';

describe('Controller: GameDetailCtrl', function() {

  // load the controller's module
  beforeEach(module('reviewWebsiteApp'));

  var GameDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ReviewCtrl = $controller('GameDetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
