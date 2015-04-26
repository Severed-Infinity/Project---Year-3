'use strict';

angular.module('reviewWebsiteApp')
  .controller('AdminCtrl', function($scope, $http, Auth, User) {

      // Use the User $resource to fetch all users
      $scope.users = User.query();

      $scope.deleteUser = function(user) {
        User.remove({ id: user._id });
        angular.forEach($scope.users, function(u, i) {
          if (u === user) {
            $scope.users.splice(i, 1);
          }
        });
      };
    });


angular.module('reviewWebsiteApp')
  .controller('AdminCtrl2', function($scope, $http, socket) {
        $scope.reviews = [];

        $http.get('/api/reviews').success(function(reviews) {
          $scope.reviews = reviews;
          socket.syncUpdates('review', $scope.reviews);
        });

        $scope.deleteReview = function(review) {
          $http.delete('/api/reviews/' + review._id);
        };

        $scope.$on('$destroy', function() {
          socket.unsyncUpdates('review');
        });
    });
