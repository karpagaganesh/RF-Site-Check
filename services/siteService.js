rfSiteCheckApp.service('siteService',
    ['$http','utilityService', function($http,utilityService){

        var tabUrlValues = ["views/list_sites.html"]

        var getTabUrlValues = function(){
            return tabUrlValues
        };

        return {
            getTabUrlValues: getTabUrlValues
        };
}]);