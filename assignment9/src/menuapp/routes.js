(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })
    
      // Premade list page
      .state('categoryList', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/categories.template.html',
        controller: 'CategoriesController as categoryList',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getItems();
          }]
        }
      })
    
      // Premade list page
      .state('itemList', {
        url: '/items',
        templateUrl: 'src/menuapp/templates/items.template.html',
        controller: 'ItemsController as itemList',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getItems();
          }]
        }
      });
    }
    
    })();
    