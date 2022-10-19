(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])

    .service('ShoppingListCheckOffService', function() {
        this.toBuy = [
            { name: "cookies", quantity: 10 },
            { name: "cupcakes", quantity: 6 },
            { name: "donuts", quantity: 13 },
            { name: "pies", quantity: 3 },
            { name: "brownies", quantity: 9 }
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
            return 'Buy ' + item.quantity + ' ' + item.name;
        }

        $scope.buyItem = function(item) {
            ShoppingListCheckOffService.buyItem(item);
        }
    })
    .controller('AlreadyBoughtController', function ($scope, ShoppingListCheckOffService) {
        $scope.alreadyBought = ShoppingListCheckOffService.alreadyBought;

        $scope.displayBought = function(item) {
            return 'Bought ' + item.quantity + ' ' + item.name;
        }
    });

})();