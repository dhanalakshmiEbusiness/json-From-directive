/**
 * Created by dhanalakshmi on 4/11/16.
 */

var app = angular.module("directiveModule", ['ngMessages']);
app.controller('mapController', [ '$scope', function($scope) {

$scope.jsonConfig={

        "sensorName" : {
            "type" : "String",
            "description" : "Enter sensorName",
            "label":"Model Number",
            "required":true
        },
        "sensorDescription" : {
            "type" : "String",
            "description" : "Enter sensorDescription",
            "label":"Registration Number",
            "required":false
        },
        "latitude" : {
            "type" : "Number",
            "description" : "Enter latitude",
            "label":"latitude",
            "required":false
        },
        "longitude" : {
            "type" : "Number",
            "description" : "Enter longitude",
            "label":"longitude",
            "required":false
        }

}

$scope.submitFrom=function (data) {

    console.log("**************************")
    console.log(data)


}



}])

app.directive('jsonFrom', function() {

    function link(scope, elem, attrs) {
        var modifiedJsonArray=[];
        if(scope.jsonConfig){
             modifiedJsonArray=createForm(scope.jsonConfig)
            if(modifiedJsonArray){
                 scope.filedsArray =modifiedJsonArray;

                console.log("******************************in contorller")
                console.log(scope.filedsArray )
                console.log("******************************in contorller")
            }
        }

    }




        function createForm(jsonConfiguration) {
            var extractedData=[];
            var label=[]
            var k = Object.keys(jsonConfiguration);
            k.forEach(function (objkey, index) {
                label.push(k[index]);

                var obj = {
                    "name": splitCamelCase(objkey),
                    "realName": objkey,
                    "type": jsonConfiguration[k[index]].type,
                    "description": jsonConfiguration[k[index]].description,
                    "model": jsonConfiguration[k[index]].label

                };

                extractedData.push(obj);

            });
            return extractedData;

        }




    function splitCamelCase (s) {
        return s.split(/(?=[A-Z])/).join(' ').split('_').join(' ').split('-').join(' ');
    };

    return {
        scope: {
            jsonConfig:'='
        },
        link: link,
        templateUrl: 'template.html'
    };

})