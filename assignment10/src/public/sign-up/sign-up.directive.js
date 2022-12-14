(function() {
    'use strict';

    angular.module('public')
    .directive('unknown', UnknownDirective);

    UnknownDirective.$inject = ['$state', 'MenuService', 'CurrentUserService', '$q'];

    function UnknownDirective($state, MenuService, CurrentUserService, $q) {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ngModel) {
              ngModel.$asyncValidators.unknown = function(modelValue, viewValue) {
                return MenuService.getMenuItemByShortName(viewValue).then(function(data) { 
                    if(viewValue.length < 1) {
                      return $q.reject();
                    }
                    if (data == null) {
                      return $q.reject();
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