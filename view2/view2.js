'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
    $scope.items = [
        {Product:"Moto G2", Desc: "Android Phone", Price: 10999},
        {Product:"The Monk who sold his ferrari", Desc: "Motivational book", Price: 250},
        {Product:"Mi Power Bank", Desc: "Power Bank", Price: 999},
        {Product:"Dell Inspiron 3537", Desc: "Laptop", Price: 45600}
    ];

    // $scope.openModal = function () {
    //     console.log('opening pop up');
    //     var modalInstance = $modal.open({
    //         templateUrl: 'popup.html',
    //     });
    // }

}]);