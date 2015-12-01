/* Como testar controllers*/

describe('Test bold controller', function(){

  var namesCtrl;

  beforeEach(function(){

    module('root');

    inject(function($controller){
      namesCtrl = $controller('names');
    });
  });

  it('Should change name when funtion is called', function() {
        namesCtrl.changeToJackie();
        expect(namesCtrl.name).toEqual("Ana");
        namesCtrl.changeToGeorge();
 		    expect(namesCtrl.name).toEqual("George");
  });
});


describe('Test functions without services request', function(){
  var myCtrl;

  beforeEach(function(){
    module('root');

    inject(function($controller){
      myCtrl = $controller('helloCtrl');
    });
  });

  it('Should change name on hello method', function() {

    // Assert that username is pre-filled
    expect(myCtrl.username).toEqual('World');

    // Assert that we read new username and greet
    myCtrl.username = 'angular';
    myCtrl.sayHello();
    expect(myCtrl.greeting).toEqual('Hello angular!');
  });
});

describe('Nexted test ', function(){
  var mainCtrl, childCtrl, grandChildCtrl;

  beforeEach(function(){
    module('root');

    inject(function($controller){
      mainCtrl = $controller('MainController');
      childCtrl = $controller('ChildController');
      grandChildCtrl = $controller('GrandChildController');
    });
  });

  it('Should get the correct scope', function(){
    expect(mainCtrl.timeOfDay).toBe('morning');
    expect(childCtrl.timeOfDay).toBe(undefined);
    expect(grandChildCtrl.timeOfDay).toBe('evening');
  });
});

//Directive tem um jeito diferente de serem testadas