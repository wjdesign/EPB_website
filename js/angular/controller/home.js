(function () {
    'use strict';
    angular.module('mainApp').controller('homeCtrl', homeCtrl);

    function homeCtrl($scope, $state, $timeout) {

        // Init
        function Init() {
            $scope.$parent.ShowLoading();
            console.log('home');
            $scope.$parent.CloseLoading();
        }
        Init();
    }
})();
