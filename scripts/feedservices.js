var feedServices = angular.module('fServices',[]);
feedServices.factory('loadFeed',['$http', function ($http) {
	return{
		loadFeeds : function(){
			return $http.jsonp('https://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK')
			.success(function (data, status, headers, config){
				return data;
			}).
			error(function (data, status, headers, config){
				console.log('data error ' + data);
				console.log('status error' + status);
			}); 
		}
	}
}]);