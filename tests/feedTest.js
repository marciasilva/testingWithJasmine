describe('Testing promise from loadFeeds', function () {
	var $scope;
	var $q;
	var deferred;

	beforeEach(module('feed'));

	beforeEach(inject(function($controller, _$rootScope_, _$q_, FeedList) {
		$q = _$q_;
		$scope = _$rootScope_.$new();

    	// We use the $q service to create a mock instance of defer
    	//A deferred object represents a function that is asynchronous.
    	deferred = _$q_.defer();

    	// Use a Jasmine Spy to return the deferred promise
   		spyOn(FeedList, 'get').and.returnValue(deferred.promise);

    	// Init the controller, passing our spy service instance
    	$controller('basicCrtl', { 
    		$scope: $scope, 
    		FeedList: FeedList
    	});
	}));

	it('Should promise success', function () {
		deferred.resolve();
		expect(deferred.promise.$$state.status).toBe(1);
		expect($scope.error).toBe(undefined);
		expect($scope.feeds).not.toBe(undefined);
	});
}); 