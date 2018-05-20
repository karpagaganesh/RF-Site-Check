rfSiteCheckApp.service('siteService',
    ['$http','utilityService', function($http,utilityService){

        var sites = [{name: 'All Sites', page:'views/list_sites.html'}];
        var siteData = [{siteId: 'AXL12345', operator: 'ATT', state: 'Texas'}];

        var getTabUrlValues = function(){
            return sites
        };

        var getAllSitesData = function(){
            return siteData
        };

        var getSites = function () {
            return sites;
        };

        var addSite = function () {
            sites.splice(1, 0, {name: 'Untitled Site', page:'views/new_site.html'});

        };

        return {
            getTabUrlValues: getTabUrlValues,
            getSites: getSites,
            getAllSitesData: getAllSitesData,
            addSite: addSite
        };
}]);