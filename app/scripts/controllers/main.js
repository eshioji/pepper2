'use strict';

/**
 * @ngdoc function
 * @name pepperClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pepperClientApp
 */
angular.module('pepperClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
