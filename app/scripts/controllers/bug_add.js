'use strict';

/*global Firebase */

angular.module('bughuntApp')
  .controller('BugAddCtrl', function ($scope, $state, $stateParams, $firebase, FIREBASE_URL) {
 
    $scope.item = {};

    $scope.save = function() {
      $scope.item.id = new Date().valueOf();
      var itemRef = new Firebase(FIREBASE_URL + 'bugs/' + $scope.item.id);
      $firebase(itemRef).$set($scope.item);
      $state.go('^.main');
    };

  });
