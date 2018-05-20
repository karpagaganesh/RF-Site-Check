rfSiteCheckApp.controller("siteController",
    ['$scope', 'siteService', 'NgTableParams' ,
        function($scope, siteService, NgTableParams){
    var calcExtractionModel = $scope;
    calcExtractionModel.tabContentUrl = "views/list_sites.html"
    calcExtractionModel.forms = siteService.getFormName();
    calcExtractionModel.selectedForm = siteService.getSelectedForm();
    calcExtractionModel.items = [
        {Product:"Moto G2", Desc: "Android Phone", Price: 10999},
        {Product:"The Monk who sold his ferrari", Desc: "Motivational book", Price: 250},
        {Product:"Mi Power Bank", Desc: "Power Bank", Price: 999},
        {Product:"Dell Inspiron 3537", Desc: "Laptop", Price: 45600}
    ];

    var data = [{siteId: 'AXL12345', operator: 'ATT', state: 'Texas'}];
    calcExtractionModel.tableParams = new NgTableParams({}, { dataset: data});

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