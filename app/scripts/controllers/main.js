'use strict';

/*global Firebase */

angular.module('bughuntApp')
  .controller('MainCtrl', function ($scope, $firebase, FIREBASE_URL) {
    var bugsref = new Firebase(FIREBASE_URL + 'bugs');
    $scope.bugs = $firebase(bugsref);
  });
