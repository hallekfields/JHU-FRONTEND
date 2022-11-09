(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiEndPoint', "https://davids-restaurant.herokuapp.com/menu_items.json");

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var found = this;
        found.searchTerm = '';
        found.items = {};

        found.getMatchedMenuItems = function() {
            var promise = MenuSearchService.getMatchedMenuItems(found.searchTerm);

            promise.then(function (response) {
                found.items = response;
                console.log(found.items);
            })
            .catch(function (error) {
                console.log("Something went terribly wrong.");
            });
        };

        found.removeItem = function (itemIndex) {
            if (found.items.length > 0)
                (found.items).splice(itemIndex, 1);
        };
    }


    MenuSearchService.$inject = ['$http', 'ApiEndPoint'];
    function MenuSearchService($http, ApiEndPoint) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
            method: "GET",
            url: (ApiEndPoint)
            }).then(function (result) {
                // process result and only keep items that match
                var foundItems = result.data.menu_items.filter(item => item.description.includes(searchTerm));
            
                // return processed items
                return foundItems;
            });
        };
    }


    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                found: '=foundItems',
                onRemove: '='
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };
    
        return ddo;
    }
  
  
    function FoundItemsDirectiveController() {
        var list = this;
    }

})();