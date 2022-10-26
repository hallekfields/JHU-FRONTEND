(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])

    .service('ShoppingListCheckOffService', function() {
        this.toBuy = [
            { name: "cookies", quantity: 10, pricePerItem: 2 },
            { name: "cupcakes", quantity: 6, pricePerItem: 3 },
            { name: "donuts", quantity: 13, pricePerItem: 4 },
            { name: "pies", quantity: 3, pricePerItem: 10 },
            { name: "brownies", quantity: 9, pricePerItem: 3 }
        ];
        this.alreadyBought = [];

        this.buyItem = function(index) {
            this.alreadyBought.push(this.toBuy[index]);
            this.toBuy.splice(index, 1);
        };
    })

    .controller('ToBuyController', function ($scope, ShoppingListCheckOffService) {
        $scope.toBuy = ShoppingListCheckOffService.toBuy;

        $scope.displayBuy = function(item) {
            return 'Buy ' + (item.quantity > 0 ? item.quantity : 0)  + ' ' + item.name;
        }

        $scope.buyItem = function(item) {
            ShoppingListCheckOffService.buyItem(item);
        }
    })
    .controller('AlreadyBoughtController', function ($scope, ShoppingListCheckOffService) {
        $scope.alreadyBought = ShoppingListCheckOffService.alreadyBought;

        $scope.displayBought = function(item) {
            return 'Bought ' + (item.quantity > 0 ? item.quantity : 0) + ' ' + item.name + ' for ';
        }
    })
    .filter('totalPriceFilter', function () { 
        return function(price) {
            return '$$' + price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
        };
    });

})();