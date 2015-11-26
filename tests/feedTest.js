
/*
Set up your expectations using $httpBackend.
Invoke the code that makes the $http call(s).
Call $httpBackend.flush() to make it respond to any pending requests with the expectations you set up.
Make your test assertions.
*/

describe('Testing a Controller that uses a Promise', function () {
  var $scope;
  var $q;
  var deferred;

  beforeEach(module('feed'));

  beforeEach(inject(function($controller, _$rootScope_, _$q_, loadFeed) {
    $q = _$q_;
    $scope = _$rootScope_.$new();

    // We use the $q service to create a mock instance of defer
    deferred = _$q_.defer();

    // Use a Jasmine Spy to return the deferred promise
    spyOn(loadFeed, 'loadFeeds').and.returnValue(deferred.promise);

    // Init the controller, passing our spy service instance
    $controller('feed', { 
      $scope: $scope, 
      loadFeed: loadFeed
    });
  }));

  it('should resolve promise', function () {
    // Setup the data we wish to return for the .then function in the controller
    deferred.resolve();

    // We have to call apply for this to work
    

    // Since we called apply, not we can perform our assertions
    expect($scope.feeds).toBe(undefined);
    $scope.$apply();
    expect($scope.feeds).not.toBe(undefined);
  });

});