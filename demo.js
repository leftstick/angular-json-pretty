'use strict';
var demo = angular.module('demo', ['angular-json-pretty']);

demo.controller('DemoController', function($scope) {

    $scope.jsonObj = {
        labels: ['1', '2', '3', '4', '5', '6'],
        series: [{
            name: 'Fibonacci sequence',
            data: [1, 2, 3, 5, 8, 13]
        }, {
            name: 'Golden section',
            data: [1, 1.618, 2.618, 4.236, 6.854, 11.09]
        }]
    };

    $scope.jsonStr = '{"name":"Test","series":[{"name":"Fibonacci sequence","data":[1,2,3,5,8,13]}]}';

});
