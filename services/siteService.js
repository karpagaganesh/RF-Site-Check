rfSiteCheckApp.service('siteService',
    ['$http','utilityService', function($http,utilityService){

        var sitesTab = [{name: 'All Sites', id:'' ,page:'views/list_sites.html'}];
        var siteDatas = [{"operator":"sd","state":"sds","market":"sd","submarket":"ds","county":"sd","siteId":"d","streetAddress":"s","latitude":"d","longitude":"d","structureType":"ds","ifOtherSpecify":"sdf","towerOwner":"dfs","cabinetType":"sds","cabinetLocation":"sdfs","numberOfCabinets":"sdf","basebandUnitType":"sdgsg","numberOfBasebandUnits":"dfgdd","numberOfSectors":"gfn","numberOfAntennasPerSector":"wret","azimuth":"546g","totalNumberOfRadiosOnTheSite":"dfbf","radioModel":"23","radioLocation":"23","quantity":"232r","numberOfTMAs":"23rwef","tmaModel":"dfg34","numberOfDiplexers":"4t3rge","diplexerModel":"43trgef","numberOfCoaxialCables":"43tefd","coaxialCableModel":"43tgr","uploadImagesOfRadios":"43treg","uploadImagesOfAntennas":"34tr","uploadImagesOfCabinet":"43red","uploadImagesOfDiplexerTMAs":"43erd","height":"34"},
            {siteId: 'AXL12343', operator: 'ATT', state: 'California'},
            {siteId: 'AXL12342', operator: 'ATT', state: 'Arizona'},
            {siteId: 'AXL12346', operator: 'TMobile', state: 'Texas'},
            {siteId: 'AXL12347', operator: 'TMobile', state: 'Texas'}];

        var tabView = {page:'views/list_sites.html'};
        var selectedSite = {value: null};

        var getTabViewUrl = function(){
            return tabView
        };

        var setTabContent = function(site){
            page = site.page;
            selectedSite.value = site;
            if (page.includes('list')){
                tabView.page = 'views/list_sites.html';
            }
            else if (page.includes('new')){
                tabView.page = 'views/new_site.html';
            }
            else if (page.includes('view')){
                tabView.page = 'views/view_site.html';
            }
        };

        var getAllSitesData = function(){
            return siteDatas
        };

        var getSites = function () {
            return sitesTab;
        };

        var addSite = function () {
            sitesTab.splice(1, 0, {name: 'Untitled Site', id:'', page:'views/new_site.html'});
            tabView.page = 'views/new_site.html';
            selectedSite.value = null;
        };

        var openSite = function (site) {
            for (siteData in siteDatas){
                if (siteDatas[siteData]['siteId'] === site['siteId']){
                    sitesTab.push({name:site['siteId'], page:'views/view_site.html'})
                }
            }
            tabView.page = 'views/view_site.html';
            selectedSite.value = site;
        };

        var getSelectedSite = function () {
            return selectedSite;
        };

        return {
            setTabContent: setTabContent,
            getSites: getSites,
            getAllSitesData: getAllSitesData,
            addSite: addSite,
            openSite: openSite,
            getTabViewUrl: getTabViewUrl,
            getSelectedSite: getSelectedSite
        };
}]);