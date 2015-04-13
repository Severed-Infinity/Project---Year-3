'use strict';

angular.module('reviewWebsiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('review', {
        url: '/review',
        templateUrl: 'app/review/review/review.html',
        controller: 'ReviewCtrl'
      });
  });