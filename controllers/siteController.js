rfSiteCheckApp.controller("siteController",
    ['$scope', 'siteService', 'NgTableParams' ,
        function($scope, siteService, NgTableParams){
    var siteControllerModel = $scope;
    siteControllerModel.selected = {};
    siteControllerModel.tabContentUrl = siteService.getTabViewUrl();
    var data = siteService.getAllSitesData();
    var newData = [{siteId: '', operator: '', state: ''}];
    siteControllerModel.tableParams = new NgTableParams({}, { dataset: data});

    siteControllerModel.newTableParams = new NgTableParams({}, { dataset: newData});
    siteControllerModel.sites = siteService.getSites();

    siteControllerModel.setTabContent = function(page) {
        siteService.setTabContent(page);
    };

    siteControllerModel.addSite = function(){
        siteService.addSite();
    };

    siteControllerModel.openSite = function (site) {
        siteService.openSite(site);
        siteControllerModel.selected.site = site
    };

    siteControllerModel.downloadSite = function (site) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(site));
        var dlAnchorElem = document.createElement('a');
        dlAnchorElem.setAttribute("href",     dataStr     );
        dlAnchorElem.setAttribute("download", site.siteId+".json");
        dlAnchorElem.click();

    }
}]);