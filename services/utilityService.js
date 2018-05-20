rfSiteCheckApp.service('utilityService', [function () {
    var clearArray = function (thisArray) {
        while (thisArray.length > 0) {
            thisArray.pop();
        }
    };

    var hasValueAndNotEmpty = function (property) {
        return !(property === undefined || property === null || property === '');
    };

    return{
        hasValueAndNotEmpty: hasValueAndNotEmpty,
        clearArray:clearArray
    }
}]);
