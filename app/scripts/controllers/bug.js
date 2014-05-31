'use strict';

/*global Firebase */

angular.module('bughuntApp')
  .controller('BugCtrl', function ($scope, $state, $stateParams, $firebase, FIREBASE_URL) {
 
    var itemRef = new  Firebase(FIREBASE_URL + 'bugs/' + $stateParams.bugid);
    $scope.item = $firebase(itemRef);

    $scope.save = function() {
      $scope.item.$set($scope.item);
      $state.go('^.main');
    };

  });
