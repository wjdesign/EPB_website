(function () {
    'use strict';
    angular.module('mainApp').controller('homeCtrl', homeCtrl);

    function homeCtrl($scope, $state, $timeout) {

        // 輪播廣告
        $scope.RunCarousel = function () {
            $(function () {
                $('#Banner').slick({
                    autoplay: true,
                    autoplaySpeed: 3500,
                    dots: true,
                    prevArrow: $('.prev'),
                    nextArrow: $('.next')
                });
            });
        };

        // Init
        function Init() {
            $scope.$parent.ShowLoading();
            $scope.NewsList = NewsList;     // 取得data.js的假資料
            console.log('home');
            $scope.RunCarousel();
            $scope.$parent.CloseLoading();
        }
        Init();
    }
})();
