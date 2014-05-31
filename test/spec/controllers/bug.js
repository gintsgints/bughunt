'use strict';

describe('Controller: BugCtrl', function () {

  // load the controller's module
  beforeEach(module('bughuntApp'));

  var BugCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BugCtrl = $controller('BugCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
