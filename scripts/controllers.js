var rootModule = angular.module("root", ["ui.bootstrap", "services"]);

rootModule.controller("indexCtrl", ["$scope", function($scope) {
    $scope.favoriteWord;
    $scope.favoriteColor;
    $scope.favoriteShape;
}]);

rootModule.controller("bold",["$scope","msgService", "multFunc", "multServ", function($scope,msgService,multFunc, multServ){
    $scope.val;
    $scope.msgService = msgService;
    $scope.resultMultFunc = multFunc;
    $scope.resultMultServ = multServ.multiply(2);

    $scope.isBold = function () {
        return $scope.val % 2 === 0; 
    };
    $scope.isStrike = function () {
        return $scope.val % 3 === 0;
    };
    $scope.isRed = function () {
        return $scope.val % 5 === 0;
    };

    $scope.products = [
        {id: 1, name: "Hockey puck"},
        {id: 2, name: "Golf club"},
        {id: 3, name: "Baseball bat"},
        {id: 4, name: "Lacrosse stick"}
    ];

}]);

rootModule.controller('names', function($scope){
    $scope.gender = "Neutral";
    $scope.name = 'Nada';

    $scope.changeToJackie = function(){
        $scope.name="Ana";
    };

    $scope.changeToGeorge = function() {
        $scope.name="George";
    };
});

rootModule.controller('feed', ['$scope', '$filter', function($scope, $filter){
    var _subject = "Brazil";
    $scope.option = {
        subject : function(newSub){
            return arguments.length ? (_subject = newSub) : _subject;
        },
    }

    $scope.sendMeUpdateSub = function(newSub, oldSub){
		console.log('updated');
    };
}]);


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

//Este controller funciona como uma classe
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

rootModule.controller('MyController', ['$scope', function($scope) {
  $scope.username = 'World';

  $scope.sayHello = function() {
    $scope.greeting = 'Hello ' + $scope.username + '!';
  };
}]);

rootModule.controller('GreetController', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.name = 'World';
  $scope.department = "dep greeting";
  $rootScope.department = 'Angular';

  $scope.message = 'hello';

  $scope.updateMessage = function(message){
    $scope.message = message;
  };
  
}]);

rootModule.controller('ListController', ['$scope', function($scope) {
   // $scope.department = 'ListController scope';
  $scope.names = ['Igor', 'Misko', 'Vojta'];
}]);

rootModule.controller('MainController', ['$scope', function($scope) {
  $scope.timeOfDay = 'morning';
  $scope.name = 'Nikki';
}]);

rootModule.controller('ChildController', ['$scope', function($scope) {
  $scope.name = 'Mattie';
}]);

rootModule.controller('GrandChildController', ['$scope', function($scope) {
  $scope.timeOfDay = 'evening';
  $scope.name = 'Gingerbread Baby';
}]);