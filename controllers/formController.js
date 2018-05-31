rfSiteCheckApp.controller("formController",
    ['$scope', 'siteService', function($scope, siteService) {
        var formControllerModel = $scope;
        formControllerModel.selectedSite = siteService.getSelectedSite();
        formControllerModel.newSite = {};

        formControllerModel.userFields = [
            {
                key: 'operator',
                type: 'input',
                templateOptions: {
                    label: 'Operator',
                    placeholder: 'Operator'
                }
            },
            {
                key: 'state',
                type: 'input',
                templateOptions: {
                    label: 'State',
                    placeholder: 'State'
                }
            },
            {
                key: 'market',
                type: 'input',
                templateOptions: {
                    label: 'Market',
                    placeholder: 'Market'
                }
            },
            {
                key: 'submarket',
                type: 'input',
                templateOptions: {
                    label: 'Submarket',
                    placeholder: 'Submarket'
                }
            },
            {
                key: 'county',
                type: 'input',
                templateOptions: {
                    label: 'County',
                    placeholder: 'County'
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
                    placeholder: 'Latitude'
                }
            },
            {
                key: 'longitude',
                type: 'input',
                templateOptions: {
                    label: 'Longitude',
                    placeholder: 'Longitude'
                }
            },
            {
                key: 'structureType',
                type: 'input',
                templateOptions: {
                    label: 'Structure Type',
                    placeholder: 'Structure Type'
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
                type: 'input',
                templateOptions: {
                    label: 'Tower Owner',
                    placeholder: 'Tower Owner'
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
                type: 'input',
                templateOptions: {
                    label: 'Cabinet Type',
                    placeholder: 'Cabinet Type'
                }
            },
            {
                key: 'cabinetLocation',
                type: 'input',
                templateOptions: {
                    label: 'Cabinet Location',
                    placeholder: 'Cabinet Location'
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
                type: 'input',
                templateOptions: {
                    label: 'Baseband Unit Type',
                    placeholder: 'Baseband Unit Type'
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
                type: 'input',
                templateOptions: {
                    label: 'Radio Model',
                    placeholder: 'Radio Model'
                }
            },

            {
                key: 'radioLocation',
                type: 'input',
                templateOptions: {
                    label: 'Radio Location',
                    placeholder: 'Radio Location'
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
                type: 'input',
                templateOptions: {
                    label: 'Upload Images of Radios',
                    placeholder: ' Upload Images of Radios'
                }
            },
            {
                key: 'uploadImagesOfAntennas',
                type: 'input',
                templateOptions: {
                    label: 'Upload Images of Antennas',
                    placeholder: ' Upload Images of Antennas'
                }
            },
            {
                key: 'uploadImagesOfCabinet',
                type: 'input',
                templateOptions: {
                    label: 'Upload Images of Cabinet',
                    placeholder: ' Upload Images of Cabinet'
                }
            },
            {
                key: 'uploadImagesOfDiplexerTMAs',
                type: 'input',
                templateOptions: {
                    label: 'Upload Images of Diplexer/TMAs',
                    placeholder: ' Upload Images of Diplexer/TMAs'
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
            console.log(JSON.stringify(newSite))
        }

}]);