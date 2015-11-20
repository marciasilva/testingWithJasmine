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