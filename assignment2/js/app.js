//(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var toBuy = this;

	toBuy.items = ShoppingListCheckOffService.getBuyList();

	toBuy.move = function(index) {
		ShoppingListCheckOffService.add(index);
		ShoppingListCheckOffService.delete(index);
	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var alreadyBought = this;

	alreadyBought.items = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService() {
	var service = this;
	var toBuyList = [
		{ name : "cookies", quantity: 10 },
		{ name : "apples", quantity: 3 },
		{ name : "pears", quantity: 7 },
		{ name : "grapes", quantity: 107 },
		{ name : "chicken", quantity: 2 },
	];

	var alreadyBought = [];

	service.getBuyList = function() {
		return toBuyList;
	}

	service.getBoughtList = function() {
		return alreadyBought;
	}

	service.delete = function(index) {
		toBuyList.splice(index, 1);
	}

	service.add = function(index) {
		var newItem = toBuyList[index];
		alreadyBought.push(newItem);
	}
}



//});