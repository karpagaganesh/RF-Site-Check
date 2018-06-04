rfSiteCheckApp.controller("siteController",
    ['$scope', 'siteService', 'NgTableParams' ,
        function($scope, siteService, NgTableParams){
    var siteControllerModel = $scope;
    siteControllerModel.selectedSite = siteService.getSelectedSite();
    siteControllerModel.tabContentUrl = siteService.getTabViewUrl();
    siteControllerModel.loggedIn = siteService.getLogginView();

    var data = siteService.getAllSitesData();
    var newData = [{siteId: '', operator: '', state: ''}];
    siteControllerModel.tableParams = new NgTableParams({}, { dataset: data});

    siteControllerModel.newTableParams = new NgTableParams({}, { dataset: newData});
    siteControllerModel.sites = siteService.getSites();

    siteControllerModel.setTabContent = function(site) {
        siteService.setTabContent(site);
    };

    siteControllerModel.addSite = function(){
        siteService.addSite();
    };

    siteControllerModel.openSite = function (site) {
        var matchedSite = siteService.openSite(site);
    };

    siteControllerModel.downloadSite = function (site) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(site));
        var dlAnchorElem = document.createElement('a');
        dlAnchorElem.setAttribute("href",     dataStr     );
        dlAnchorElem.setAttribute("download", site.siteId+".json");
        dlAnchorElem.click();
    };

    siteControllerModel.loginMe = function () {
        if(siteControllerModel.emailId === "test@ericsson.com" && siteControllerModel.password === "kgtest"){
            siteService.logginSuccess();
        }
    };
}]);