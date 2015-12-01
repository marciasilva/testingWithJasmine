var rootModule = angular.module("root", ["ui.bootstrap", "services"]);

rootModule.controller("favoriteCtrl", function() {
    this.favoriteWord;
    this.favoriteColor;
    this.favoriteShape;
});

rootModule.controller("bold",["msgService", "multFunc", "multServ", function(msgService,multFunc, multServ){
    this.val;
    this.msgService = msgService;
    this.resultMultFunc = multFunc;
    this.resultMultServ = multServ.multiply(2);

    this.isBold = function () {
        return this.val % 2 === 0; 
    };
    this.isStrike = function () {
        return this.val % 3 === 0;
    };
    this.isRed = function () {
        return this.val % 5 === 0;
    };

    this.products = [
        {id: 1, name: "Hockey puck"},
        {id: 2, name: "Golf club"},
        {id: 3, name: "Baseball bat"},
        {id: 4, name: "Lacrosse stick"}
    ];

}]);

rootModule.controller('names', function(){
    this.gender = "Neutral";
    this.name = 'Nada';

    this.changeToJackie = function(){
        this.name="Ana";
    };

    this.changeToGeorge = function() {
        this.name="George";
    };
});

rootModule.directive("notifyMe", function(){
    return {
        scope : {
            notifyMe : "&"
        },
        require : "ngModel",
        link : function(scope, element, attrs, ctrl){
            var oldValue;
            ctrl.$formatters.push(function(value){
                oldValue = value;
                return value;
            });
            ctrl.$parsers.push(function(value){
                scope.notifyMe()(value,oldValue);
                olValue = value;
                return value;
            });
        }
    };
});

rootModule.controller('InvoiceController', ['currencyConverter', function(currencyConverter) {
  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = currencyConverter.currencies;

  this.total = function total(outCurr) {
    return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
  };
  this.pay = function pay() {
    window.alert("Thanks!");
  };
}]);

rootModule.controller('GreetController',function() {
  this.name = 'World';
  this.department = "dep greeting";

  this.message = 'hello';

  this.updateMessage = function(message){
    this.message = message;
  };
  
});

rootModule.controller('ListController', function() {
   // $scope.department = 'ListController scope';
  this.names = ['Igor', 'Misko', 'Vojta'];
});

rootModule.controller('MainController', function() {
  this.timeOfDay = 'morning';
  this.name = 'Nikki';
});

rootModule.controller('ChildController', ['$controller', function($controller) {
  this.name = 'Mattie';
}]);

rootModule.controller('GrandChildController', function() {
  this.timeOfDay = 'evening';
  this.name = 'Gingerbread Baby';
});