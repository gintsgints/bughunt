'use strict';

describe('Controller: BugAddCtrl', function () {

  // load the controller's module
  beforeEach(module('bughuntApp'));

  var BugAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BugAddCtrl = $controller('BugAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
