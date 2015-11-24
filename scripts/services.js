var services =angular.module("services", []);

services.value("msgService", "I am a service!");
services.value("multFactor", 3);

services.factory("multFunc",["multFactor",function(multFactor){
	return multFactor * multFactor;
}]);

services.service("multServ", function(multFactor){
	this.multiply = function(vFactor){
		return vFactor * multFactor;
	}
});

services.service("feedServices", function(){
	this.load = function(){
		
	}
});