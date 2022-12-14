(function() {
    "use strict";
    
    angular.module('common')
    .service('CurrentUserService', CurrentUserService);
    
    /**
     * Used to store and track information about the currently logged in user.
     * This is intended to be injected any time we need some user metadata
     * or to find out if the user is authenticated.
     **/
    function CurrentUserService() {
        var service = this;
        var registered = false;
        var _firstname = '';
        var _lastname = '';
        var _email = '';
        var _phone = '';
        var _favorite = '';

        /**
         * Load the current user with username and token
         */
        service.saveUser = function(firstname, lastname, email, phone, favorite) {
            registered = true;
            _firstname = firstname;
            _lastname = lastname;
            _email = email;
            _phone = phone;
            _favorite = favorite;
        };

        service.getRegistered = function() {
            return registered;
        }

        service.getFirstName = function() {
            return _firstname;
        };

        service.getLastName = function() {
            return _lastname;
        };

        service.getEmail = function() {
            return _email;
        };

        service.getPhone = function() {
            return _phone;
        };

        service.getFavorite = function() {
            return _favorite;
        };
    
    }
    
})();
    