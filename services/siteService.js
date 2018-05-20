rfSiteCheckApp.service('siteService',
    ['$http','utilityService', function($http,utilityService){

        var form = [{name:"Select Form",url:null},{name:"1040",url:'pdf/f1040.pdf'}, {name:"Sch C",url:'pdf/f1040sc-3.pdf'}
            ,{name:"106",url:''}
        ];
        var options = [{ name: "a", id: 1 }, { name: "b", id: 2 }];
        var dict = {};
        dict["L1"] = 0;dict["L2"] = 0;dict["L3"] = 0;dict["L4"] = 0;dict["L5"] = 0;dict["L6"] = 0;dict["L7"] = 0;dict["L8"] = 0;dict["L9"] = 0;
        dict["L10"] = 0;dict["L11"] = 0;dict["L12"] = 0;dict["L13"] = 0;dict["L14"] = 0;dict["L15"] = 0;dict["L16"] = 0;dict["L17"] = 0;
        dict["L18"] = 0;dict["L19"] = 0;dict["L20"] = 0;dict["L21"] = 0;dict["L22"] = 0;dict["L23"] = 0;dict["L24"] = 0;dict["L25"] = 0;
        dict["L26"] = 0;dict["L27"] = 0;dict["L28"] = 0;dict["L29"] = 0;dict["L30"] = 0;dict["L31"] = 0;dict["L32"] = 0;dict["L33"] = 0;
        dict["L34"] = 0;dict["L35"] = 0;dict["L36"] = 0;dict["L37"] = 0;dict["L38"] = 0;dict["L39"] = 0;dict["L40"] = 0;dict["L41"] = 0;
        dict["L42"] = 0;dict["L43"] = 0;dict["L44"] = 0;dict["L45"] = 0;dict["L46"] = 0;dict["L47"] = 0;dict["L48"] = 0;dict["L49"] = 0;
        dict["L50"] = 0;dict["L51"] = 0;dict["L52"] = 0;dict["L53"] = 0;dict["L54"] = 0;dict["L55"] = 0;dict["L56"] = 0;dict["L57"] = 0;
        dict["L58"] = 0;dict["L59"] = 0;dict["L60"] = 0;dict["L61"] = 0;dict["L62"] = 0;dict["L63"] = 0;dict["L64"] = 0;dict["L65"] = 0;
        dict["L66"] = 0;dict["L67"] = 0;dict["L68"] = 0;dict["L69"] = 0;dict["L70"] = 0;dict["L71"] = 0;dict["L72"] = 0;dict["L73"] = 0;
        dict["L74"] = 0;dict["L75"] = 0;dict["L76"] = 0;dict["L77"] = 0;dict["L78"] = 0;dict["L79"] = 0;dict["L80"] = 0;
        var selectedForm = {name:"Select Form",url:null};
        var formsProperties = [], formCalculations= [], formDifference=[];

        var clearArray = function (thisArray) {
            while (thisArray.length > 0) {
                thisArray.pop();
            }
        };

        var hasValueAndNotEmpty = function (property) {
            return !(property === undefined || property === null || property === '');
        };

        var initFormsProperties = function(){
            clearArray(formsProperties);
            var urlToCall = 'http://localhost:8282/pdf-data-extraction/v1/data-extraction/formProperties';
            return $http.post(urlToCall,{formName: selectedForm.name}).then(
                function (responseData) {
                    console.log(responseData);
                    if(hasValueAndNotEmpty(responseData) && hasValueAndNotEmpty(responseData.data) &&
                    hasValueAndNotEmpty(responseData.data.lines)) {
                        for(var i=0;i<responseData.data.lines.length;i++){
                            responseData.data.lines[i]["value"] = 0;
                            formsProperties.push(responseData.data.lines[i]);
                        }
                    }
                    return formsProperties;
                },
                function (errorResponse) {

                }).finally(function () {
                });
        };

        var initFormsCalculations = function(){
            clearArray(formCalculations);
            var urlToCall = 'http://localhost:8282/pdf-data-extraction/v1/data-extraction/formCalculations';
            return $http.post(urlToCall,{formName: selectedForm.name}).then(
                function (responseData) {
                    console.log("Calc");
                    console.log(responseData);
                    if(hasValueAndNotEmpty(responseData) && hasValueAndNotEmpty(responseData.data) &&
                        hasValueAndNotEmpty(responseData.data.calculations)) {
                        for(var i=0;i<responseData.data.calculations.length;i++){
                            formCalculations.push(responseData.data.calculations[i]);
                        }
                    }
                    return formCalculations;
                },
                function (errorResponse) {

                }).finally(function () {
                });
        };

        var initFormsDifferences = function(){
            clearArray(formDifference);
            var urlToCall = 'http://localhost:8282/pdf-data-extraction/v1/data-extraction/formVersionDifferences';
            return $http.post(urlToCall,{formName: selectedForm.name}).then(
                function (responseData) {
                    console.log("@@")
                    console.log(responseData)
                    if(hasValueAndNotEmpty(responseData) && hasValueAndNotEmpty(responseData.data) &&
                        hasValueAndNotEmpty(responseData.data.lines)) {
                        for(var i=0;i<responseData.data.lines.length;i++){
                            formDifference.push(responseData.data.lines[i]);
                        }
                    }
                    return formDifference;
                },
                function (errorResponse) {

                }).finally(function () {
                });
        };

        var getFormName = function(){
            return form;
        };

        var getOptions = function(){
            return options;
        };

        var getSelectedForm = function(){
            return selectedForm;
        };

        var setSelectedForm  = function(formName){
            clearArray(formsProperties);
            clearArray(formCalculations);
            clearArray(formDifference);
            for(var i=0;i<form.length;i++){
                if(formName == form[i].name){
                    selectedForm.name = form[i].name;
                    selectedForm.url = form[i].url;
                    break;
                }
            }
        }

        var getFormsProperties = function(formName){
            setSelectedForm(formName);
            if(formName != 'Select Form'){
                console.log("Fomr Load: "+formName);
                initFormsProperties();
                initFormsCalculations();
                initFormsDifferences()
            }
            console.log(selectedForm);
            return formsProperties;
        };

        var getLines = function(){
            return formsProperties;
        };

        var getCalculations = function(){
            return formCalculations;
        };

        var getDifference = function(){
            return formDifference;
        };

        var getLineText = function(){
            return number.L1;
        };
        var number = {'L1':0};
        var updateLineValue = function(lineNumber,lineText){
            dict[lineText] = lineNumber;
            for(var i=0;i<formsProperties.length;i++){
                if(formsProperties[i].lineNumber == lineText){
                    formsProperties[i].value = lineNumber;
                    break;
                }
            }
            if(selectedForm.name=="1040"){
                formsProperties[22].value = parseInt(formsProperties[5].value) +  parseInt(formsProperties[6].value) +
                    parseInt(formsProperties[7].value ) +parseInt(formsProperties[8].value) +
                    parseInt(formsProperties[9].value) +
                    parseInt(formsProperties[10].value) +
                    parseInt(formsProperties[11].value) +
                    parseInt(formsProperties[12].value) +
                    parseInt(formsProperties[13].value) +
                    parseInt(formsProperties[14].value) +
                    parseInt(formsProperties[15].value) +
                    parseInt(formsProperties[16].value) +
                    parseInt(formsProperties[17].value) +
                    parseInt(formsProperties[18].value) +
                    parseInt(formsProperties[19].value) +
                    parseInt(formsProperties[20].value) +
                    parseInt(formsProperties[21].value);
                var L37 = 0;
                for(var i=23;i<37;i++){
                     L37 += parseInt(formsProperties[i].value);
                }
                formsProperties[37].value = L37;

                var L47 = 0;
                for(var i=45;i<49;i++){
                    L47 += parseInt(formsProperties[i].value);
                }
                formsProperties[49].value = L47;

            }
            if(selectedForm.name=="Sch C"){
                formsProperties[2].value = parseInt(formsProperties[0].value) -  parseInt(formsProperties[1].value)
                formsProperties[4].value = parseInt(formsProperties[2].value) -  parseInt(formsProperties[3].value)
                formsProperties[6].value = parseInt(formsProperties[4].value) +  parseInt(formsProperties[5].value)
                formsProperties[26].value = parseInt(formsProperties[24].value) -  parseInt(formsProperties[25].value)
                var L23 = 0;
                for(var i=6;i<23;i++){
                    L23 +=  parseInt(formsProperties[i].value)
                }
                formsProperties[23].value = L23;
                formsProperties[24].value = parseInt(formsProperties[6].value) -  parseInt(formsProperties[23].value)
                formsProperties[35].value = parseInt(formsProperties[30].value) +  parseInt(formsProperties[31].value) +
                                            parseInt(formsProperties[32].value) +  parseInt(formsProperties[33].value)+
                                            parseInt(formsProperties[34].value)
                formsProperties[37].value = parseInt(formsProperties[35].value) -  parseInt(formsProperties[36].value)
            }


            console.log(formsProperties);
        };

        var getSelectedFormUrl= function(){
            return selectedForm.url;
        };

        return {
            getFormName: getFormName,
            getOptions: getOptions,
            getSelectedForm: getSelectedForm,
            getFormsProperties: getFormsProperties,
            getLines: getLines,
            getCalculations: getCalculations,
            getDifference: getDifference,
            getLineText: getLineText,
            updateLineValue: updateLineValue,
            getSelectedFormUrl: getSelectedFormUrl
        };
}]);