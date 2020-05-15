(function () {
    'use strict';

    var app = angular.module('mainApp', ["ui.router", "ui.bootstrap"]);
    app.config(['$interpolateProvider', function ($interpolateProvider) {
            $interpolateProvider.startSymbol('[{');
            $interpolateProvider.endSymbol('}]');
    }]).config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");
        $stateProvider
        // 外層
            // 首頁
            .state('home', {
                url: '/home',
                templateUrl: ('/EPB_website/html/home.html'+Version),
                controller: 'homeCtrl'
            })
            // 韓國快三
            .state('about', {
                url: '/about',
                templateUrl: ('/EPB_website/html/about.html'+Version),
                controller: 'aboutCtrl'
            })

    }).directive('closeCollapse', function() {
        // Mobile版關閉漢堡盒
        return function(scope, element, attrs) {
            link: {
                element.bind('click',function(){
                    $(".collapse.show").collapse("hide");
                    $('.animated-icon').removeClass('open');
                })
            }
        }
    });
})();
