(function () {
    'use strict';

    var app = angular.module('mainApp', ["ui.router", "ui.bootstrap", "ngSanitize"]);
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
            // 關於我們
            .state('about', {
                url: '/about',
                templateUrl: ('/EPB_website/html/about.html'+Version),
                controller: 'aboutCtrl'
            })
            // 最新消息
            .state('news', {
                url: '/news',
                templateUrl: ('/EPB_website/html/news.html'+Version),
                controller: 'newsCtrl'
            })
            // 活動成果
            .state('activity', {
                url: '/activity/:id',
                templateUrl: ('/EPB_website/html/activity.html'+Version),
                controller: 'activityCtrl'
            })
            // 常見問答
            .state('qa', {
                url: '/qa',
                templateUrl: ('/EPB_website/html/qa.html'+Version),
                controller: 'qaCtrl'
            })
            // 相關法規
            .state('rule', {
                url: '/rule',
                templateUrl: ('/EPB_website/html/rule.html'+Version),
                controller: 'ruleCtrl'
            })
            // 資料下載
            .state('download', {
                url: '/download',
                templateUrl: ('/EPB_website/html/download.html'+Version),
                controller: 'downloadCtrl'
            })
            // 與我聯絡
            .state('contact', {
                url: '/contact',
                templateUrl: ('/EPB_website/html/contact.html'+Version),
                controller: 'contactCtrl'
            })

    }).directive('closeCollapse', function() {
        // Mobile版關閉漢堡盒
        return function(scope, element, attrs) {
            link: {
                element.bind('click',function(){
                    $(".ShowMenu").trigger("click");
                    $(".menu-overlay").fadeOut(500);
                })
            }
        }
    });
})();
