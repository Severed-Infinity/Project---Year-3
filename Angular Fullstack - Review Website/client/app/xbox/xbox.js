'use strict';

angular.module('reviewWebsiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('xbox', {
        url: '/xbox',
        templateUrl: 'app/xbox/xbox.html',
        controller: 'XboxCtrl'
      });
  });