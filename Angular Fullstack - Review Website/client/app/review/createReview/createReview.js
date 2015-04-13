'use strict';

angular.module('reviewWebsiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createReview', {
        url: '/createReview',
        templateUrl: 'app/review/createReview/createReview.html',
        controller: 'CreateReviewCtrl'
      });
  });