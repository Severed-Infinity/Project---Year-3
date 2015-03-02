'use strict';

angular.module('reviewWebsiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pc', {
        url: '/pc',
        templateUrl: 'app/pc/pc.html',
        controller: 'PcCtrl'
      });
  });