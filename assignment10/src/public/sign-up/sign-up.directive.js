(function() {
    'use strict';

    angular.module('public')
    .directive('unknown', UnknownDirective);

    UnknownDirective.$inject = ['$state', 'MenuService', 'CurrentUserService'];

    function UnknownDirective($state, MenuService, CurrentUserService) {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
              ctrl.$asyncValidators.unknown = function(modelValue, viewValue) {
                return MenuService.getMenuItemByShortName(viewValue).then(function(data) { 
                    if(viewValue.length < 1) {
                      return false;
                    }
                    if (data == null) {
                        return false;
                    }
                    else {
                        return true;
                    }
                });
              };
            }
          };
    }

})();