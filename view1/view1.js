'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [
    '$scope', '$location', function($scope, $location) {
    console.log('s')
    $scope.loginMe = function () {
        console.log($scope.emailId)
        console.log($scope.password)
        console.log('ldd1')
        window.location.href = '#!/view2'
        // $location.path('/view2/view2.html');
        // $state.go('/view2')
    };
}]);