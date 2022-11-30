(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    
    ItemsController.$inject = ['$stateParams', 'items'];
    function ItemsController($stateParams, items) {
      var itemList = this;
      var item = items[$stateParams.categoryShortName];
      itemList.items = item;
    }
    
    })();
    