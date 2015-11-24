describe('Test bold controller', function(){

  beforeEach(module('root'));

  it('Should change name when funtion is called', inject(function($controller) {
    var scope = {},
        ctrl = $controller('names', {$scope:scope});

        scope.changeToJackie();
        expect(scope.name).toEqual("Ana");
        scope.changeToGeorge();
 		    expect(scope.name).toEqual("George");
  }));

});

describe('Test notifyMe directive', function(){
	beforeEach(module('root'));

	it('Should call function when value change', inject(function($controller){

		var scope = {};
		ctrl = $controller('feed', {$scope:scope});
    expect(scope.sendMeUpdateSub).toBeDefined();
    expect(scope.sendMeUpdateSub).toHaveBeenCalled();
	}));

});