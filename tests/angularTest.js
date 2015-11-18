
describe('PhoneListCtrl', function(){

  beforeEach(module('firstApp'));

  it('should create "phones" model with 3 phones', inject(function($controller) {
    var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

    expect(scope.phones.length).toBe(3);
  }));

});

/*describe('PhoneListCtrl', function(){

	beforeEach(module('firstApp'));

	jasmine.addMatchers({
		moreThanTenPoints : function(arr){
			var ok = false;
			for (var i = 0; i < arr.length; i++) {
				ok = arr[i] > 10 ? true : false;
			}
			return ok;
		};

	});

	it('Should have team and points', inject(function($controller){
		var scope = {};
		ctrl = $controller('PhoneListCtrl', {$scope:scope});

		var checkList = scope.driversList;
		var arrPoints = [];
		for (var Driver in checkList){
			arrPoints.add(Driver.points);
		}
		expect(moreThanTenPoints).toBe(true);
	}));
});*/