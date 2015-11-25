var feedServices = angular.module('fServices',[]);

function parseXml(xml) {
   var dom = null;
   if (window.DOMParser) {
      try { 
         dom = (new DOMParser()).parseFromString(xml, "text/xml"); 
      } 
      catch (e) { dom = null; }
   }
   else if (window.ActiveXObject) {
      try {
         dom = new ActiveXObject('Microsoft.XMLDOM');
         dom.async = false;
         if (!dom.loadXML(xml)) // parse error ..

            window.alert(dom.parseError.reason + dom.parseError.srcText);
      } 
      catch (e) { dom = null; }
   }
   else
      alert("cannot parse xml string!");
   return dom;
}

feedServices.factory('loadFeed', function ($http) {
	return $http({
			method : 'GET',
			url : 'http://www.npr.org/rss/rss.php?id=1007'
	}).then(function successCallback(response){
		var doc = parseXml(response.data)
		return doc;
	}, function errorCallback(response){
		console.log('error ' + response);
	}); 
});