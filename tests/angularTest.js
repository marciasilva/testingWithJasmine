/* Como testar controllers*/

describe('Test bold controller', function(){

  var $scope;

  beforeEach(module('root'));

  beforeEach(inject(function($rootScope, $controller){
    $scope = $rootScope.$new();
    $controller("names",{$scope: $scope});
  }));

  it('Should change name when funtion is called', function() {
        $scope.changeToJackie();
        expect($scope.name).toEqual("Ana");
        $scope.changeToGeorge();
 		    expect($scope.name).toEqual("George");
  });
});


describe('Test functions without services request', function(){
  var $scope;

  beforeEach(module('root'));

  beforeEach(inject(function($rootScope, $controller){
    $scope = $rootScope.$new();
    $controller("MyController", {$scope: $scope});
  }));

  it('Should change name on hello method', function() {

    // Assert that username is pre-filled
    expect($scope.username).toEqual('World');

    // Assert that we read new username and greet
    $scope.username = 'angular';
    $scope.sayHello();
    expect($scope.greeting).toEqual('Hello angular!');
  });
});

/*TESTING NESTED CONTROLLER*/
describe('Nexted test ', function(){
  var mainScope, childScope, grandChildScope;

  beforeEach(module('root'));

  beforeEach(inject(function($rootScope, $controller){
    mainScope = $rootScope.$new();
    $controller('MainController', {$scope: mainScope});

    childScope = mainScope.$new();
    $controller('ChildController', {$scope: childScope});

    grandChildScope = childScope.$new();
    $controller('GrandChildController', {$scope: grandChildScope});
  }));

  it('Should get the correct scope', function(){
    expect(mainScope.timeOfDay).toBe('morning');
    expect(childScope.timeOfDay).toBe('morning');
    expect(grandChildScope.timeOfDay).toBe('evening');
  });
});
//Directive tem um jeito diferente de serem testadas