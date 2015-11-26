/**
 * Created by AwH on 26/11/15.
 */

var myApp = angular.module('Twitter_MEAN',[
    'ngRoute'
]);

myApp.config(['$routeProvider',
    function ($routeProvider){
        $routeProvider.
        when('/', {
            templateUrl: '/index.html',
            controller: 'homeController'
        }).
        otherwise({
            redirectTo: '/'
        });

    }

]);
