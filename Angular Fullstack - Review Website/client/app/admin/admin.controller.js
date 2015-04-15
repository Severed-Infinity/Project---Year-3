'use strict';

angular.module('reviewWebsiteApp')
  .controller('AdminCtrl', function($scope, $http, Auth, User) {

      // Use the User $resource to fetch all users
      $scope.users = User.query();

      $scope.delete = function(user) {
        User.remove({ id: user._id });
        angular.forEach($scope.users, function(u, i) {
          if (u === user) {
            $scope.users.splice(i, 1);
          }
        });
      };

    }, function($scope, $http, Review) {

      $scope.reviews = [];

    $http.get('/api/reviews').success(function(reviews) {
        $scope.reviews = reviews;
        socket.syncUpdates('review', $scope.reviews);
      });

      $scope.deleteReview = function(review) {
        Review.remove({ id: review._id });
        angular.forEach($scope.reviews, function(r, i) {
          if (r === review) {
            $scope.reviews.splice(i, 1);
          }
        });
      };
    }, function($scope, $http, Auth, Thing){
      $scope.things = Thing.query();


  });
