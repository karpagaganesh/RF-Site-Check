rfSiteCheckApp.service('siteService',
    ['$http','utilityService', function($http,utilityService){

        var sitesTab = [{name: 'All Sites', id:'' ,page:'views/list_sites.html'}];
        var siteDatas = [{"siteId":"AXL12345","operator":"AT&T","state":"Texas,TX","market":"South Texas","submarket":"Austin","county":"Travis","streetAddress":"4","latitude":"6","longitude":"7","structureType":"8","ifOtherSpecify":"8","towerOwner":"8","cabinetType":"8","cabinetLocation":"8","numberOfCabinets":"8","basebandUnitType":"8","numberOfBasebandUnits":"8","numberOfSectors":"8","numberOfAntennasPerSector":"8","azimuth":"8","totalNumberOfRadiosOnTheSite":"8","radioModel":"8","radioLocation":"8","quantity":"8","numberOfTMAs":"8","tmaModel":"8","numberOfDiplexers":"8","diplexerModel":"8","numberOfCoaxialCables":"8","coaxialCableModel":"8","uploadImagesOfRadios":"8","uploadImagesOfAntennas":"8","uploadImagesOfCabinet":"8","uploadImagesOfDiplexerTMAs":"8","height":"8"},
            {"siteId":"AXL12346","operator":"TMobile","state":"California,CA","market":"South Texas","submarket":"Austin","county":"Travis","streetAddress":"4","latitude":"6","longitude":"7","structureType":"8","ifOtherSpecify":"8","towerOwner":"8","cabinetType":"8","cabinetLocation":"8","numberOfCabinets":"8","basebandUnitType":"8","numberOfBasebandUnits":"8","numberOfSectors":"8","numberOfAntennasPerSector":"8","azimuth":"8","totalNumberOfRadiosOnTheSite":"8","radioModel":"8","radioLocation":"8","quantity":"8","numberOfTMAs":"8","tmaModel":"8","numberOfDiplexers":"8","diplexerModel":"8","numberOfCoaxialCables":"8","coaxialCableModel":"8","uploadImagesOfRadios":"8","uploadImagesOfAntennas":"8","uploadImagesOfCabinet":"8","uploadImagesOfDiplexerTMAs":"8","height":"8"},
            {"siteId":"AXL12347","operator":"AT&T","state":"New Mexico,NM","market":"South Texas","submarket":"Austin","county":"Travis","streetAddress":"4","latitude":"6","longitude":"7","structureType":"8","ifOtherSpecify":"8","towerOwner":"8","cabinetType":"8","cabinetLocation":"8","numberOfCabinets":"8","basebandUnitType":"8","numberOfBasebandUnits":"8","numberOfSectors":"8","numberOfAntennasPerSector":"8","azimuth":"8","totalNumberOfRadiosOnTheSite":"8","radioModel":"8","radioLocation":"8","quantity":"8","numberOfTMAs":"8","tmaModel":"8","numberOfDiplexers":"8","diplexerModel":"8","numberOfCoaxialCables":"8","coaxialCableModel":"8","uploadImagesOfRadios":"8","uploadImagesOfAntennas":"8","uploadImagesOfCabinet":"8","uploadImagesOfDiplexerTMAs":"8","height":"8"},
            {"siteId":"AXL12348","operator":"TMobile","state":"Nevada,NV","market":"South Texas","submarket":"Austin","county":"Travis","streetAddress":"4","latitude":"6","longitude":"7","structureType":"8","ifOtherSpecify":"8","towerOwner":"8","cabinetType":"8","cabinetLocation":"8","numberOfCabinets":"8","basebandUnitType":"8","numberOfBasebandUnits":"8","numberOfSectors":"8","numberOfAntennasPerSector":"8","azimuth":"8","totalNumberOfRadiosOnTheSite":"8","radioModel":"8","radioLocation":"8","quantity":"8","numberOfTMAs":"8","tmaModel":"8","numberOfDiplexers":"8","diplexerModel":"8","numberOfCoaxialCables":"8","coaxialCableModel":"8","uploadImagesOfRadios":"8","uploadImagesOfAntennas":"8","uploadImagesOfCabinet":"8","uploadImagesOfDiplexerTMAs":"8","height":"8"},
            {"siteId":"AXL12349","operator":"AT&T","state":"Texas,TX","market":"South Texas","submarket":"Austin","county":"Travis","streetAddress":"4","latitude":"6","longitude":"7","structureType":"8","ifOtherSpecify":"8","towerOwner":"8","cabinetType":"8","cabinetLocation":"8","numberOfCabinets":"8","basebandUnitType":"8","numberOfBasebandUnits":"8","numberOfSectors":"8","numberOfAntennasPerSector":"8","azimuth":"8","totalNumberOfRadiosOnTheSite":"8","radioModel":"8","radioLocation":"8","quantity":"8","numberOfTMAs":"8","tmaModel":"8","numberOfDiplexers":"8","diplexerModel":"8","numberOfCoaxialCables":"8","coaxialCableModel":"8","uploadImagesOfRadios":"8","uploadImagesOfAntennas":"8","uploadImagesOfCabinet":"8","uploadImagesOfDiplexerTMAs":"8","height":"8"}];

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
            return site
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