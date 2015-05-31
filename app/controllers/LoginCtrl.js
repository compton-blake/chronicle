define(['app'], function (app) {
    'use strict';
    app.register.controller('LoginCtrl', ['$scope', function ($scope) {
       $scope.test = "Dave";
    }]);
});