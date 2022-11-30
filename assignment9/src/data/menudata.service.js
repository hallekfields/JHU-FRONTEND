(function () {
    'use strict';
    
    angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('CategoriesApiEndPoint', "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
    .constant('ItemsApiEndPoint', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/");
    
    
    MenuSearchService.$inject = ['$http', 'CategoriesApiEndPoint', 'ItemsApiEndPoint'];
    function MenuSearchService($http, CategoriesApiEndPoint, ItemsApiEndPoint) {
        var service = this;
    
        service.getAllCategories = function () {
            return $http({
            method: "GET",
            url: (CategoriesApiEndPoint)
            }).then(function (result) {
                // return processed items
                return result;
            });
        };
    
        service.getItemsForCategory = function (categoryShortName) {
            return $http({
            method: "GET",
            url: (ItemsApiEndPoint + categoryShortName + '.json')
            }).then(function (result) {
                // return processed items
                return result;
            });
        };
    }

})();