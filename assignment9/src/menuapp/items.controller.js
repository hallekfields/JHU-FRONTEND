(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    
    ItemsController.$inject = ['$stateParams', 'items'];
    function ItemsController($stateParams, items) {
      var itemList = this;
      itemList.items = items;
      itemList.category = $stateParams.categoryShortName;
    }
    
    })();
    