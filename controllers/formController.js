  rfSiteCheckApp.controller("formController",
    ['$scope', 'siteService', function($scope, siteService) {
        var formControllerModel = $scope;
        formControllerModel.selectedSite = siteService.getSelectedSite();
        formControllerModel.newSite = {};
        formControllerModel.options = {
            formState: {
                horizontalLabelClass: 'col-sm-2',
                horizontalFieldClass: 'col-sm-10',
                readOnly: true
            }
        };
        var latPlaceHolder = {value: undefined};
        var longPlaceHolder = {value: undefined};
        if( navigator.geolocation ){
            navigator.geolocation.getCurrentPosition(success, fail );
        }

        function success(position){
            longPlaceHolder.value = position.coords.longitude;
            latPlaceHolder.value = position.coords.latitude;
            console.log(latPlaceHolder)
            console.log(longPlaceHolder)
        }

        function fail(){
            longPlaceHolder.value = 'Longitude';
            latPlaceHolder.value = 'Latitude';
        }

        formControllerModel.userFields = [
            {
                key: 'operator',
                type: 'select',
                templateOptions: {
                    label: 'Operator',
                    "options": [
                      {
                          "name": "AT&T",
                          "value": "att"
                      },
                      {
                          "name": "T-Mobile",
                          "value": "tmobile"
                      },
                      {
                          "name": "Sprint",
                          "value": "sprint"
                      }
                  ]
                }
            },
            {
                key: 'state',
                type: 'select',
                templateOptions: {
                    label: 'State',
                    "options": [
                      {
                          "name": "Arizona",
                          "value": "arizona"
                      },
                      {
                          "name": "California",
                          "value": "california"
                      },
                      {
                          "name": "Texas",
                          "value": "texas"
                      },
                      {
                          "name": "Arkansas",
                          "value": "arkansas"
                      },
                      {
                          "name": "Colorado",
                          "value": "colorado"
                      },
                      {
                          "name": "Florida",
                          "value": "florida"
                      },
                      {
                          "name": "Georgia",
                          "value": "georgia"
                      },
                      {
                          "name": "Tennessee",
                          "value": "tennessee"
                      },
                      {
                          "name": "Kentucky",
                          "value": "kentucky"
                      },
                      {
                          "name": "Nevada",
                          "value": "nevada"
                      },
                      {
                          "name": "Nebraska",
                          "value": "nebraska"
                      }
                    ]
                }
            },
            {
                key: 'market',
                type: 'select',
                templateOptions: {
                    label: 'Market',
                    "options": [
                      {
                          "name": "South Texas",
                          "value": "southTexas"
                      },
                      {
                          "name": "North Texas",
                          "value": "northTexas"
                      }
                  ]
                }
            },
            {
                key: 'submarket',
                type: 'select',
                templateOptions: {
                    label: 'Submarket',
                    "options": [
                      {
                          "name": "Houston",
                          "value": "houston"
                      },
                      {
                          "name": "San Antonio",
                          "value": "sanAntonio"
                      },
                      {
                          "name": "Austin",
                          "value": "austin"
                      }
                  ]
                }
            },
            {
                key: 'county',
                type: 'select',
                templateOptions: {
                    label: 'County',
                    "options": [
                      {
                          "name": "Bexar",
                          "value": "bexar"
                      },
                      {
                          "name": "Hays",
                          "value": "hays"
                      },
                      {
                          "name": "Atascosa",
                          "value": "atascosa"
                      }
                  ]
                }
            },
            {
                key: 'siteId',
                type: 'input',
                templateOptions: {
                    label: 'Site ID',
                    placeholder: 'Site ID'
                }
            },


            {
                key: 'streetAddress',
                type: 'input',
                templateOptions: {
                    label: 'Street Address',
                    placeholder: 'Street Address'
                }
            },
            {
                key: 'latitude',
                type: 'input',
                templateOptions: {
                    label: 'Latitude',
                    placeholder: latPlaceHolder.value
                }
            },
            {
                key: 'longitude',
                type: 'input',
                templateOptions: {
                    label: 'Longitude',
                    placeholder: longPlaceHolder.value
                }
            },
            {
                key: 'structureType',
                type: 'select',
                templateOptions: {
                    label: 'Structure Type',
                    "options": [
                      {
                          "name": "Self Support",
                          "value": "selfSupport"
                      },
                      {
                          "name": "Guyed",
                          "value": "guyed"
                      },
                      {
                          "name": "Roof Top",
                          "value": "roofTop"
                      }
                  ]
                }
            },
            {
                key: 'ifOtherSpecify',
                type: 'input',
                templateOptions: {
                    label: 'If other specify',
                    placeholder: 'If other specify'
                }
            },
            {
                key: 'towerOwner',
                type: 'select',
                templateOptions: {
                    label: 'Tower Owner',
                    "options": [
                      {
                          "name": "Crown Castle",
                          "value": "crownCastle"
                      },
                      {
                          "name": "American Tower",
                          "value": "americanTower"
                      },
                      {
                          "name": "Other",
                          "value": "other"
                      }
                  ]
                }
            },
            {
                key: 'ifOtherSpecify',
                type: 'input',
                templateOptions: {
                    label: 'If other specify',
                    placeholder: 'If other specify'
                }
            },
            {
                key: 'cabinetType',
                type: 'select',
                templateOptions: {
                    label: 'Cabinet Type',
                    "options": [
                        {
                            "name": "RBS 6601",
                            "value": "rbs6601"
                        },
                        {
                            "name": "RBS 6101",
                            "value": "rbs6101"
                        },
                        {
                            "name": "RBS 6201",
                            "value": "rbs6201"
                        },
                        {
                            "name": "RBS 6303",
                            "value": "rbs6303"
                        },
                        {
                            "name": "RBS 6102",
                            "value": "rbs6102"
                        },
                        {
                            "name": "RBS 6201",
                            "value": "rbs6201"
                        },
                        {
                            "name": "RBS 6301",
                            "value": "rbs6301"
                        },
                        {
                            "name": "RBS 6302",
                            "value": "rbs 6302"
                        }
                    ]
                }
            },
            {
                key: 'cabinetLocation',
                type: 'select',
                templateOptions: {
                    label: 'Cabinet Location',
                    "options": [
                      {
                          "name": "Indoor",
                          "value": "indoor"
                      },
                      {
                          "name": "Outdoor",
                          "value": "outdoor"
                      }
                  ]
                }
            },
            {
                key: 'numberOfCabinets',
                type: 'input',
                templateOptions: {
                    label: 'Number of Cabinets',
                    placeholder: 'Number of Cabinets'
                }
            },
            {
                key: 'basebandUnitType',
                type: 'select',
                templateOptions: {
                    label: 'Baseband Unit Type',
                    "options": [
                      {
                          "name": "DUS-41",
                          "value": "dus41"
                      },
                      {
                          "name": "BB-5216",
                          "value": "bb5216"
                      },
                      {
                          "name": "BB-6630",
                          "value": "bb6630"
                      }
                  ]
                }
            },
            {
                key: 'numberOfBasebandUnits',
                type: 'input',
                templateOptions: {
                    label: 'Number of Baseband Units',
                    placeholder: 'Number of Baseband Units'
                }
            },
            {
                key: 'numberOfSectors',
                type: 'input',
                templateOptions: {
                    label: 'Number of Sectors',
                    placeholder: 'Number of Sectors'
                }
            },
            {
                key: 'numberOfAntennasPerSector',
                type: 'input',
                templateOptions: {
                    label: 'Number of Antennas per Sector',
                    placeholder: 'Number of Antennas per Sector'
                }
            },
            {
                key: 'azimuth',
                type: 'input',
                templateOptions: {
                    label: 'Azimuth',
                    placeholder: 'Azimuth'
                }
            },
            {
                key: 'totalNumberOfRadiosOnTheSite',
                type: 'input',
                templateOptions: {
                    label: 'Total Number of Radios on the Site',
                    placeholder: ' Total Number of Radios on the Site'
                }
            },
            {
                key: 'radioModel',
                type: 'select',
                templateOptions: {
                    label: 'Radio Model',
                    "options": [
                        {
                            "name": "RRUS-11",
                            "value": "rrus11"
                        },
                        {
                            "name": "RRUS-12",
                            "value": "rrus12"
                        },
                        {
                            "name": "RRUS-32 B2",
                            "value": "rrus32B2"
                        },
                        {
                            "name": "RRUS-32 B66",
                            "value": "rrus32B66"
                        },
                        {
                            "name": "Radio 4478",
                            "value": "radio4478"
                        },
                        {
                            "name": "Radio 4426",
                            "value": "radio4426"
                        },
                        {
                            "name": "Radio 8843",
                            "value": "radio8843"
                        },
                        {
                            "name": "Radio 4415",
                            "value": "radio 4415"
                        }
                    ]
                }
            },
            {
                key: 'radioLocation',
                type: 'select',
                templateOptions: {
                    label: 'Radio Location',
                    "options": [
                      {
                          "name": "Top",
                          "value": "top"
                      },
                      {
                          "name": "Bottom",
                          "value": "bottom"
                      }
                  ]
                }
            },
            {
                key: 'quantity',
                type: 'input',
                templateOptions: {
                    label: 'Quantity',
                    placeholder: 'Quantity'
                }
            },
            {
                key: 'numberOfTMAs',
                type: 'input',
                templateOptions: {
                    label: 'Number of TMAs',
                    placeholder: 'Number of TMAs'
                }
            },
            {
                key: 'tmaModel',
                type: 'input',
                templateOptions: {
                    label: 'TMA Model',
                    placeholder: 'TMA Model'
                }
            },
            {
                key: 'numberOfDiplexers',
                type: 'input',
                templateOptions: {
                    label: 'Number of Diplexers',
                    placeholder: 'Number of Diplexers'
                }
            },
            {
                key: 'diplexerModel',
                type: 'input',
                templateOptions: {
                    label: 'Diplexer Model',
                    placeholder: 'Diplexer Model'
                }
            },
            {
                key: 'numberOfCoaxialCables',
                type: 'input',
                templateOptions: {
                    label: 'Number of Coaxial Cables',
                    placeholder: 'Number of Coaxial Cables'
                }
            },
            {
                key: 'coaxialCableModel',
                type: 'input',
                templateOptions: {
                    label: 'Coaxial Cable Model',
                    placeholder: 'Coaxial Cable Model'
                }
            },
            {
                key: 'uploadImagesOfRadios',
                type: 'button',
                templateOptions: {
                    label: 'Upload Images of Radios',
                    text: 'Upload',
                    btnType: 'info',
                    onClick: ''
                }
            },
            {
                key: 'uploadImagesOfAntennas',
                type: 'button',
                templateOptions: {
                    label: 'Upload Images of Antennas',
                    text: 'Upload',
                    btnType: 'info',
                    onClick: ''
                }
            },
            {
                key: 'uploadImagesOfCabinet',
                type: 'button',
                templateOptions: {
                    label: 'Upload Images of Cabinet',
                    text: 'Upload',
                    btnType: 'info',
                    onClick: ''
                }
            },
            {
                key: 'uploadImagesOfDiplexerTMAs',
                type: 'button',
                templateOptions: {
                    label: 'Upload Images of Diplexer/TMAs',
                    text: 'Upload',
                    btnType: 'info',
                    onClick: ''
                }
            },
            {
                key: 'height',
                type: 'input',
                templateOptions: {
                    label: 'Height in Feet',
                    placeholder: ' Height in Feet'
                }
            }
        ];

        formControllerModel.submit = function(newSite){
            siteService.saveSite(newSite)
        }

}]);
