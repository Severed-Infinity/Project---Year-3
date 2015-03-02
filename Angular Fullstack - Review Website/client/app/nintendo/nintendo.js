'use strict';

angular.module('reviewWebsiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('nintendo', {
        url: '/nintendo',
        templateUrl: 'app/nintendo/nintendo.html',
        controller: 'NintendoCtrl'
      });
  });