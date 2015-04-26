'use strict';

angular.module('reviewWebsiteApp')
  .config(function($stateProvider) {
      $stateProvider
      .state('game', {
            url: '/game/:id',
            abstract: true,
            templateUrl: 'app/review/gameDetail/GameDetail.html',
            controller: 'GameDetailCtrl'
          }).state('game.about', {
            url: '/about',
            templateUrl: 'app/review/gameDetail/gameDetailSubPages/gameDetailAbout.html',
            controller: ''
          }).state('game.comments', {
            url: '/comments',
            templateUrl: 'app/review/gameDetail/gameDetailSubPages/gameDetailComments.html',
            controller: ''
          }).state('game.photos', {
            url: '/photos',
            templateUrl: 'app/review/gameDetail/gameDetailSubPages/gameDetailPhotos.html',
            controller: ''
          });
    });
