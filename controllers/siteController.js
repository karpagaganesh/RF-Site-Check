rfSiteCheckApp.controller("siteController",
    ['$scope', 'siteService', 'NgTableParams' ,
        function($scope, siteService, NgTableParams){
    var siteControllerModel = $scope;
    siteControllerModel.tabContentUrl = siteService.getTabUrlValues()[0].page;

    var data = siteService.getAllSitesData();
    var newData = [{siteId: '', operator: '', state: ''}];
    siteControllerModel.tableParams = new NgTableParams({}, { dataset: data});

    siteControllerModel.newTableParams = new NgTableParams({}, { dataset: newData});
    siteControllerModel.sites = siteService.getSites()

    siteControllerModel.setTabContent = function(page) {
        siteControllerModel.tabContentUrl = page;
    };

    siteControllerModel.addSite = function(){
        siteService.addSite();
        siteControllerModel.tabContentUrl = siteService.getTabUrlValues()[1].page;
    }
}]);