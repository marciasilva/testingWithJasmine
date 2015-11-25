var feedApp = angular.module('feed',['fServices']);

feedApp.controller('basicCrtl',['loadFeed', function($scope, loadFeed){
	$scope.iniMsg = "Trying to load a feed";
	$scope.callLoadFeedServ = function(){
		console.log('feeds ');
		$scope.feeds = loadFeed();
	}
}]);