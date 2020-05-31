(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyNameCalculator', function ($scope) {
  $scope.name = "";
  $scope.val=0;
  $scope.nameValueCalculator = function () {
    var temp = func($scope.name);
    $scope.val = temp;
  };

  function func(string){
    var value = 0;
    for (var i=0;i<string.length;i++){
      value += string.charCodeAt(i);
    }
    return value;
  }
});

})();
