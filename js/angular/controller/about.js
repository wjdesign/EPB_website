(function () {
    'use strict';
    angular.module('mainApp').controller('aboutCtrl', aboutCtrl);

    function aboutCtrl($scope, $state, $timeout) {

        // Init
        function Init() {
            $scope.$parent.ShowLoading();
            // console.log('about');
            $scope.$parent.CloseLoading();
        }
        Init();
    }
})();
