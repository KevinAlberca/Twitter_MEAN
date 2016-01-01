/**
 * Created by AwH on 26/11/15.
 */

var myApp = angular.module('Twitter_MEAN',[
    'ngRoute'
]);

myApp.config(['$routeProvider',
    function ($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: '/public/Views/home.html',
                controller: 'messagesController'
            })
            .when('/home', {
                templateUrl: '/public/Views/home.html',
                controller: 'messagesController'
            })
            .when('/profile', {
                templateUrl: '/public/Views/profile.html',
                controller: 'userController'
            })
            .when('/login', {
                templateUrl: '/public/Views/login.html',
                controller: 'userController'
            })
            .when('/registration', {
                templateUrl: '/public/Views/registration.html',
                controller: 'userController'
            })
            .otherwise({
            redirectTo: '/'
        });

    }

]);
