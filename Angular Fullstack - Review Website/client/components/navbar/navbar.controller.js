'use strict';

angular.module('reviewWebsiteApp')
    .controller('NavbarCtrl', function($scope, $location, Auth) {
      //      'use strict';
      $scope.menu = [{
        'title': 'Home',
        'link': '/'
      }, {
        'title': 'Playstation',
        'link': '/playstation'
      }, {
        'title': 'Xbox',
        'link': '/xbox'
      }, {
        'title': 'PC',
        'link': '/pc'
      }, {
        'title': 'Nintendo',
        'link': '/nintendo'
      }];

      $scope.isCollapsed = true;
      $scope.isLoggedIn = Auth.isLoggedIn;
      $scope.isAdmin = Auth.isAdmin;
      $scope.getCurrentUser = Auth.getCurrentUser;

      $scope.logout = function() {
        Auth.logout();
        $location.path('/login');
      };

      $scope.isActive = function(route) {
        return route === $location.path();
      };
    });
$(function() {
  $('.navbar-nav').on('click', function() {
    if ($('.navbar-header .navbar-toggle').css('display') !== 'none') {
      $('.navbar-header .navbar-toggle').trigger('click');
    }
  });
});
