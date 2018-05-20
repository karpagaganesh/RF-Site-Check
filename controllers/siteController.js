rfSiteCheckApp.controller("siteController",
    ['$scope', 'siteService', 'NgTableParams' ,
        function($scope, siteService, NgTableParams){
    var siteControllerModel = $scope;
    siteControllerModel.tabContentUrl = siteService.getTabUrlValues()[0];

    var data = [{siteId: 'AXL12345', operator: 'ATT', state: 'Texas'}];
    siteControllerModel.tableParams = new NgTableParams({}, { dataset: data});

    siteControllerModel.sites = [{name: 'All Sites', page:'list_sites'}]

    siteControllerModel.setTabContent = function(name) {
        siteControllerModel.tabContentUrl = "views/" +name+".html";
    };
}]);