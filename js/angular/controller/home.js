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

        // 輪播廣告
        $scope.RunActive = function () {
            $(function () {
                console.log($('#activeSlide'));
                $('#activeSlide').slick({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 3500,
                    dots: false,
                    prevArrow: $('.activePrev'),
                    nextArrow: $('.activeNext')
                });
            });
        };

        // Init
        function Init() {
            $scope.$parent.ShowLoading();
            $scope.Data = Data;     // 取得data.js的假資料
            console.log('home');
            $scope.RunCarousel();
            $scope.RunActive();
            $scope.$parent.CloseLoading();
        }
        Init();
    }
})();
