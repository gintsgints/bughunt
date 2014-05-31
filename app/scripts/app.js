'use strict';

angular
  .module('bughuntApp', [
    'firebase',
    'ui.router',
    'ngCookies',
    'ngResource',
    'ngSanitize'
  ])

.constant('FIREBASE_URL', 'https://bughunt.firebaseio.com/' )

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
      .state('menu.bug', {
        url: '/bug',
        templateUrl: 'views/bug_edit.html',
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
