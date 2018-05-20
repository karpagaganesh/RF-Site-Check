rfSiteCheckApp.service('siteService',
    ['$http','utilityService', function($http,utilityService){

        var sitesTab = [{name: 'All Sites', id:'' ,page:'views/list_sites.html'}];
        var siteDatas = [{siteId: 'AXL12345', operator: 'ATT', state: 'Texas'},
            {siteId: 'AXL12343', operator: 'ATT', state: 'California'},
            {siteId: 'AXL12342', operator: 'ATT', state: 'Arizona'},
            {siteId: 'AXL12346', operator: 'TMobile', state: 'Texas'},
            {siteId: 'AXL12347', operator: 'TMobile', state: 'Texas'}];

        var tabView = {page:'views/list_sites.html'}

        var getTabViewUrl = function(){
            return tabView
        };

        var setTabContent = function(page){
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
        };

        var openSite = function (site) {
            for (siteData in siteDatas){
                if (siteDatas[siteData]['siteId'] === site['siteId']){
                    sitesTab.push({name:site['siteId'], page:'views/view_site.html'})
                }
            }
            tabView.page = 'views/view_site.html';
        };

        return {
            setTabContent: setTabContent,
            getSites: getSites,
            getAllSitesData: getAllSitesData,
            addSite: addSite,
            openSite: openSite,
            getTabViewUrl: getTabViewUrl
        };
}]);