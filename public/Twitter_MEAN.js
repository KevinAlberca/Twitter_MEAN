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
                templateUrl: '/public/Views/home.html'
            })
            .when('/home', {
                templateUrl: '/public/Views/home.html'
            })
            .when('/profile', {
                templateUrl: '/public/Views/profile.html',
                controller: 'profileController'
            })
            .otherwise({
            redirectTo: '/'
        });

    }

]);
