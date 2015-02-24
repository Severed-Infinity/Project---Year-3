(function () {
    'use strict';
    angular.module('reviewApp')
        .config(['$routeProdiver', function ($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'app/components/home/homeView.html',
                controller: 'app/components/home/homeController.js'
            }).when('/playstation', {
                templateUrl: 'app/components/home/playstationView.html',
                controller: 'app/components/home/playstationController.js'
            }).otherwise({
                redirectTo: '/'
            });
        }]);
});