(function () {
    'use strict';
    angular.module('mainApp').controller('aboutCtrl', aboutCtrl);

    function aboutCtrl($scope, $state, $timeout) {

        // Init
        function Init() {
            $scope.$parent.ShowLoading();
            $scope.$parent.GoTop(); // 滾動至頁頂
            // console.log('about');
            $scope.$parent.CloseLoading();
        }
        Init();
    }
})();
