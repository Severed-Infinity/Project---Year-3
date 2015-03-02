'use strict';

angular.module('reviewWebsiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('playstation', {
        url: '/playstation',
        templateUrl: 'app/playstation/playstation.html',
        controller: 'PlaystationCtrl'
      });
  });