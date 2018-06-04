rfSiteCheckApp.service('siteService',
    ['$http','utilityService','$localStorage', '$sessionStorage',
        function($http,utilityService, $localStorage, $sessionStorage){

        var sitesTab = [{name: 'All Sites', id:'' ,page:'views/list_sites.html'}];
        var siteDatas = [
            {"operator":"att","state":"arizona","market":"southTexas","submarket":"houston","county":"hays","siteId":"Site1","structureType":"selfSupport","towerOwner":"americanTower","cabinetType":"rbs6101","cabinetLocation":"outdoor","basebandUnitType":"dus41","radioModel":"rrus12","radioLocation":"bottom"}
        ];

        var latPlaceHolder = {value: undefined};
        var longPlaceHolder = {value: undefined};
        var newSite = {"latitude": '', "longitude":''};
        var loggedIn = {value : false};
        var currentSitesInStorage = $localStorage.sites;
        if (currentSitesInStorage === undefined) {
            currentSitesInStorage = []
        }

        if(currentSitesInStorage.length > siteDatas.length){
            siteDatas.length = 0;
            angular.copy(currentSitesInStorage, siteDatas);
        }
        else{
            $localStorage.sites = siteDatas;
        }

        var tabView = {page:'views/list_sites.html'};
        var selectedSite = {value: null};

        var getTabViewUrl = function(){
            return tabView
        };

        var isSiteOpenInTabView = function(newItem){
            var sitePresent = false;
            for(var siteTabIndex in sitesTab){
                if(sitesTab[siteTabIndex]['name'] === newItem['name']){
                    sitePresent = true;
                    break;
                }
            }

            return sitePresent;
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
                for (var siteData in siteDatas){
                    if (siteDatas[siteData]['siteId'] === site['name']){
                        var newItem = {name:site['name'], page:'views/view_site.html'}
                        var sitePresent = isSiteOpenInTabView(newItem);
                        if(!sitePresent){
                            sitesTab.push(newItem)
                        }
                        selectedSite.value = siteDatas[siteData];
                    }
                }
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
                var newItem = undefined;
                if (siteDatas[siteData]['siteId'] === site['siteId']){
                    newItem = {name:site['siteId'], page:'views/view_site.html'};
                }
                if(newItem !== undefined){
                    var sitePresent = isSiteOpenInTabView(newItem);
                    if(!sitePresent){
                        sitesTab.push(newItem)
                    }
                }
            }
            tabView.page = 'views/view_site.html';
            selectedSite.value = site;
            return site
        };

        var getSelectedSite = function () {
            return selectedSite;
        };

        var getNewSiteModel = function () {
            if( navigator.geolocation ){
                navigator.geolocation.getCurrentPosition(success);
            }
            function success(position){
                longPlaceHolder.value = position.coords.longitude;
                latPlaceHolder.value = position.coords.latitude;
                newSite.latitude = latPlaceHolder.value;
                newSite.longitude = longPlaceHolder.value;
            }
            return newSite;
        };

        var saveSite = function (newSite) {
            siteDatas.push(newSite);
            console.log(JSON.stringify(newSite))
            $localStorage.sites = siteDatas;
            for(var siteIndex in sitesTab){
                if(sitesTab[siteIndex]['name'] === 'All Sites'){
                    setTabContent(sitesTab[siteIndex])
                    break;
                }
            }
        };

        var getLogginView = function () {
            return loggedIn;
        };

        var logginSuccess = function () {
            loggedIn.value = true;
        };

        return {
            setTabContent: setTabContent,
            getSites: getSites,
            getAllSitesData: getAllSitesData,
            addSite: addSite,
            openSite: openSite,
            getTabViewUrl: getTabViewUrl,
            getSelectedSite: getSelectedSite,
            getNewSiteModel: getNewSiteModel,
            saveSite: saveSite,
            getLogginView: getLogginView,
            logginSuccess: logginSuccess
        };
}]);