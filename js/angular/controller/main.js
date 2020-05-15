(function () {
    'use strict';
    angular.module('mainApp').controller('mainCtrl', mainCtrl);

    function mainCtrl($scope, $state, $timeout) {

        $scope.CopyrightYear = (new Date()).getFullYear();

        // Show Loading
        $scope.ShowLoading = function () {
            $scope.$parent.Loading = true;
        };

        // Close Loading
        $scope.CloseLoading = function () {
            var Already = $timeout(function () {
                $scope.Loading = false;
                $scope.stop = function(){
                    $timeout.cancel(Already);
                };
            },500);
        };

        // Mobile版漢堡盒動畫
        angular.element(".ShowMenu").on("click", function () {
            $('.animated-icon').stop().toggleClass('open');
        });

        // Init
        function Init() {
            // $scope.ShowLoading();
            console.log('main');
            // $scope.CloseLoading();
        }
        Init();
    }
})();
