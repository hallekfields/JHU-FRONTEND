(function () {
    'use strict';
    
    angular.module('public')
    .controller('SignUpController', SignUpController);

    /**
     * Handles registration form and redirects user to page.
     */
    SignUpController.$inject = ['$state', 'MenuService', 'CurrentUserService'];
    function SignUpController($state, MenuService, CurrentUserService) {
        var $ctrl = this;
        $ctrl.firstname = '';
        $ctrl.firstname = '';
        $ctrl.email = '';
        $ctrl.phone = '';
        $ctrl.favorite = '';
        $ctrl.error = '';
        $ctrl.completed = false;
      
        /**
         * Handles when user clicks the submit button.
         */
        $ctrl.submit = function() {
            MenuService.getMenuItemByShortName($ctrl.favorite).then(function(data) { 
                if (data == null) {
                    $ctrl.error = 'No such menu number exists';
                    $ctrl.completed = false;
                }
                else {
                    CurrentUserService.saveUser(
                        $ctrl.firstname,
                        $ctrl.lastname,
                        $ctrl.email,
                        $ctrl.phone,
                        data
                    );
                    $ctrl.completed = true;
                }
            });
        };

        $ctrl.checkIfFavoriteKnown = function() {
            MenuService.getMenuItemByShortName($ctrl.favorite).then(function(data) { 
                if (data == null) {
                    return false;
                }
                else {
                    return true;
                }
            });
        }

        $ctrl.valid = function() {
            return ($ctrl.firstname !== '' && $ctrl.lastname !== '' && $ctrl.email !== '' && $ctrl.phone !== '' && $ctrl.favorite !== '' && $ctrl.error === '');
        };
    
    }
    
    
})();
    