var feedApp = angular.module('feed',['fServices']);

feedApp.controller('basicCrtl',['FeedList', '$scope', function( FeedList, $scope){
	$scope.feeds = FeedList.get();
		console.log('before on ' + $scope.feeds);
		$scope.$on('FeedList', function (event, data) {
			$scope.feeds = data;
			console.log('after ' + $scope.feeds);
		});
}]);