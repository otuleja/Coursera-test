(function () {
'use strict';

angular.module('myFirstApp', [])
.controller('lunchCheckController', lunchCheckController);

lunchCheckController.$inject = ['$scope'];
function lunchCheckController($scope) {
  $scope.str = "";
  $scope.message = "";

  $scope.check = function () {
  	var numberItems = parseList($scope.str);

  	if (numberItems === 0) {
  		$scope.message = 'Please Enter Data First'
  	} else if (numberItems < 4) {
  		$scope.message = 'Enjoy!'
  	} else {
  		$scope.message = 'Too Much!'
  	};

  };

  function parseList(string) {
  	if (string.length === 0) {
  		return 0
  	} else {
  		var items = string.split(',');
  		return items.length;
  	}
  }


}

})();
