var feedApp = angular.module('feed',['fServices']);

feedApp.controller('basicCrtl',['loadFeed', '$scope', function( loadFeed, $scope){
	console.log($scope.feeds);


	var promise = loadFeed.loadFeeds();
	promise.then(
		function(payload){
			$scope.feeds = payload.data.posts;
			for(propertyName in $scope.feeds){
				console.log('p ' + propertyName);
				console.log('v ' + $scope.feeds[propertyName]);
			}
		},
		function(errorPayload){
			console.log('error');
		});
	
	//console.log($scope.feeds);
}]);