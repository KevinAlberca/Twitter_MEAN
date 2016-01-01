angular.module('Twitter_MEAN').controller('userController', [ '$scope', '$http', function($scope, $http){
    $scope.user = "AwH";
    $scope.response = "";


    $scope.register = function (data){
        if(data.$valid){
            $scope.response = "Waiting a response of server";

            if(data.password === data.passwordCheck){
                $http({
                   url: '/users/new',
                   method: 'POST',
                   data: data,
                   headers: {'Content-Type': 'application/json'}
               })
           } else {
               $scope.response = "Password should be the same";
           }
        } else {
            $scope.response = "ERROR";
        }
    }

}]);
