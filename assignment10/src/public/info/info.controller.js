(function () {
    'use strict';
    
    angular.module('public')
    .controller('InfoController', InfoController);

    InfoController.$inject = ['$state', 'MenuService', 'CurrentUserService'];

    function InfoController($state, MenuService, CurrentUserService) {
      var $ctrl = this;

      $ctrl.getRegistered = function() {
        return CurrentUserService.getRegistered();
      }

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
        var favorite = CurrentUserService.getFavorite();
        return favorite.name + '... ' + favorite.description;
      }

      $ctrl.getFavoriteImg = function() {
        var shortName = CurrentUserService.getFavorite().short_name;
        var splitName = shortName.match(/[a-zA-Z]+|[0-9]+/g);
        return 'images/menu/' + splitName[0] + '/' + shortName + '.jpg';
      } 
    }
    
})();
    