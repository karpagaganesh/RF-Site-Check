rfSiteCheckApp.controller("siteController", ['$scope','siteService',function($scope, siteService){
    var calcExtractionModel = $scope;
    console.log('FFF')
    calcExtractionModel.forms = siteService.getFormName();
    calcExtractionModel.selectedForm = siteService.getSelectedForm();

    calcExtractionModel.selectedOption = $scope.options;
    calcExtractionModel.getFormSelectedForm = function(formName){
        siteService.getFormsProperties('Select Form');
        siteService.getFormsProperties(formName);
    };
    calcExtractionModel.lines = siteService.getLines();
    calcExtractionModel.calculations = siteService.getCalculations();
    calcExtractionModel.differences = siteService.getDifference();
    calcExtractionModel.setTabContent = function(name) {
        calcExtractionModel.tabContentUrl = "views/" +name+".html";
    };
    calcExtractionModel.lineText = siteService.getLineText();
    calcExtractionModel.update =function(lineNumber,lineText){
        console.log(lineNumber);
        console.log(lineText);
        siteService.updateLineValue(lineNumber,lineText);
    };
    calcExtractionModel.substringRemoveIndex = function(difference){
        return difference.substring(3);
    };
}]);