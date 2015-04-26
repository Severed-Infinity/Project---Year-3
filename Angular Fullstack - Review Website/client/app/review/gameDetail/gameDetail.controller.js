'use strict';

angular.module('reviewWebsiteApp')
  .controller('GameDetailCtrl', function($scope, $stateParams, $http) {
      $scope.id = $stateParams.id;

      $http.get('/api/reviews/' + $stateParams.id).success(function(review) {
        $scope.review = review;
      });
    });
