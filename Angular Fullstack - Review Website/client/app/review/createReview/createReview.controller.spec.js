'use strict';

describe('Controller: CreateReviewCtrl', function () {

  // load the controller's module
  beforeEach(module('reviewWebsiteApp'));

  var CreateReviewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateReviewCtrl = $controller('CreateReviewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
