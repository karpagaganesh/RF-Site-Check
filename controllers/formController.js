rfSiteCheckApp.controller("formController",
    ['$scope', 'siteService', function($scope, siteService) {
        var formControllerModel = $scope;
        formControllerModel.selectedSite = siteService.getSelectedSite();

}]);