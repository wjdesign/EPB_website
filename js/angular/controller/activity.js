(function () {
    'use strict';
    angular.module('mainApp').controller('activityCtrl', activityCtrl);

    function activityCtrl($scope, $state, $timeout, $stateParams) {

        // 取得頁數
        $scope.GetTotalPage = function() {
            $scope.TotalPage = 5;   // 總頁數
            $scope.PageRange = [];
            for(let i=1;i<=$scope.TotalPage;i++) {
                $scope.PageRange.push(i);
            }
            $scope.Page = 1;        // 預設頁數
        };

        // 跳轉到指定頁數
        $scope.ChangePage = function (_page) {
            $scope.Page = _page;
        };

        // 加減頁數
        $scope.AddPage = function (_num) {
            if ($scope.PageRange.includes($scope.Page + _num)) {
                $scope.Page+=_num;
            }
        };

        // Init
        function Init() {
            $scope.$parent.ShowLoading();
            $scope.Data = Data;     // 取得data.js的假資料
            $scope.GetTotalPage();  // 取得頁數
            console.log('activity');
            $scope.ActivityID = $stateParams.id;    // 由動態路由取得活動ID
            $scope.$parent.CloseLoading();
        }
        Init();
    }
})();
