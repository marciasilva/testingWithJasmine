
describe('indexCtrl', function(){
	beforeEach(module('root'));
	it('Should update values after user choice', inject(function($controller){
		var scope = {};
		ctrl = $controller('indexCtrl', {$scope:scope});
		expect(scope.favoriteShape == 'shape').toBeFalsy();
		expect(scope.favoriteColor == 'color').toBeFalsy();
		expect(scope.favoriteWord == 'word').toBeFalsy();
	}));
});
