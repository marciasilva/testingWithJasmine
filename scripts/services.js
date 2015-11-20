var services =angular.module("services", []);

services.value("msgService", "I am a service!");
services.value("multFactor", 3);

services.factory("multFunc",["multFactor",function(multFactor){
	return multFactor * multFactor;
}]);

services.service("multServ", function(multFactor){
	this.multiply = function(vFactor){
		console.log('chamou multiply');
		console.log(('vF ')+ vFactor);
		console.log(('m')+ multFactor);

		return vFactor * multFactor;
	}
});

