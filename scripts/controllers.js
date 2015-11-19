angular.module("root", [])
    .controller("indexCtrl", ["$scope", function($scope) {
        $scope.favoriteWord = 'word';
        $scope.favoriteColor = 'color';
        $scope.favoriteShape = 'shape';
    }]);