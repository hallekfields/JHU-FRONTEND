(function () {
    'use strict';
    
    angular.module('restaurant')
    .controller('InfoController', InfoController);

    InfoController.$inject = ['$state', 'MenuService', 'CurrentUserService'];

    function InfoController(MenuService, CurrentUserService) {
      var $ctrl = this;

      $ctrl.getFirstName = function() {
        return CurrentUserService.getFirstName();
      }

      $ctrl.getLastName = function() {
        return CurrentUserService.getLastName();
      }

      $ctrl.getEmail = function() {
        return CurrentUserService.getEmail();
      }

      $ctrl.getPhone = function() {
        return CurrentUserService.getPhone();
      }

      $ctrl.getFavorite = function() {
        return CurrentUserService.getFavorite();
      }

      $ctrl.getFavoriteImg = function() {
        
      } 
    }
    
})();
    