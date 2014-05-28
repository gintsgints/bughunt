'use strict';

angular
  .module('bughuntApp', [
    'ui.router',
    'ngCookies',
    'ngResource',
    'ngSanitize'
  ])

.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('menu', {
      templateUrl: 'views/menu.html',
    })
    .state('menu.main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('menu.about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'MainCtrl'
    })
  ;
})

;
