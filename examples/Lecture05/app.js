(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Ya";
  $scope.sayHello = function () {
    return "Hello Coursera!";

  };
});


})();
