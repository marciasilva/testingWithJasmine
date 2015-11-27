var feedServices = angular.module('fServices',['ngResource']);
	var feeds = []
	feedServices.factory('FeedLoader',['$resource', function ($resource) {
		return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
			fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
		});
	}]);

	feedServices.service('FeedList',['$rootScope', 'FeedLoader', function ($rootScope, FeedLoader) {
		this.get = function() {
			var feedSources = [
			{title: 'Slashdot', url: 'http://rss.slashdot.org/Slashdot/slashdot'},
			{title: 'Tweakers', url: 'http://feeds.feedburner.com/tweakers/mixed'},
			{title: 'Wired', url: 'http://feeds.wired.com/wired/index'},
			];
			for (var i=0; i<feedSources.length; i++) {
				FeedLoader.fetch({q: feedSources[i].url, num: 10}, {}, function (data) {

					var feed = data.responseData.feed;
					feeds.push(feed);
				});
			}
			return feeds;
		};
	}]);