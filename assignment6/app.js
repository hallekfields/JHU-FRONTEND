(function() {
    'use strict';

    angular.module('LunchChecker', [])

    .controller('LunchCheckController', function ($scope) {
        $scope.list = '';

        $scope.message = '';

        $scope.style = '';

        $scope.checkTooMuch = function() {
            const strippedList = $scope.list.replace(/\s+/g, '');
            const items = strippedList.split(',').filter(Boolean); 
            const length = items.length;
            if (length === 0) {
                $scope.message = 'Please enter data first';
                $scope.style = 'red';
            }
            else if (length > 3) {
                $scope.message = 'Too much!';
                $scope.style = 'green';
            }
            else {
                $scope.message = 'Enjoy!';
                $scope.style = 'green';
            }   
        };
    });

})();