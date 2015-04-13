'use strict';

angular.module('reviewWebsiteApp')
  .controller('PlaystationCtrl', function($scope, $http, socket) {
      $scope.reviews = [];
      //        {
      //          title: 'test game',
      //          publisher: 'test publisher'
      //        },
      //        {
      //          title: 'test game 2',
      //          publisher: 'test publisher 2'
      //        },
      //        {
      //          title: 'test game 3',
      //          publisher: 'test publisher 3'
      //        }
      //      ];

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
