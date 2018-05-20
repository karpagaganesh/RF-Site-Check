rfSiteCheckApp.service('siteService',
    ['$http','utilityService', function($http,utilityService){

        var sites = [{name: 'All Sites', page:'views/list_sites.html'}];
        var getTabUrlValues = function(){
            return sites
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
            addSite: addSite
        };
}]);