/**
 * Created by alair.tavares on 17/09/2014.
 */
app.controller('chartController', ['$scope', 'carrosAPI', '$http', '$filter', function ($scope, carrosAPI, $http, $filter) {

        $http.get("componentes/chart/chart1.json").success(function (data) {
            var dadosJson = data;

            var chart = {};
            chart.type = "PieChart";
            chart.data = dadosJson;
            chart.options = {
                displayExactValues: true,
                height: 200,
                is3D: true
            };

            chart.formatters = {
                number: [{
                        columnNum: 1,
                        pattern: "###000"
                    }]
            };
            
            $scope.chart = chart;
        });
        
        $http.get("componentes/chart/chart2.json").success(function (data) {
            var dadosJson = data;

            var chart = {};
            chart.type = "ColumnChart";
            chart.data = dadosJson;
            chart.options = {
                displayExactValues: true,
                height: 200,
                is3D: true,
                chartArea: {left: 40, top: 5, bottom: 0, height: "90%"}
            };

            chart.formatters = {
                number: [{
                        columnNum: 1,
                        pattern: "###000"
                    }]
            };
            
            $scope.chart2 = chart;
        });
        
        $http.get("componentes/chart/chart3.json").success(function (data) {
            var dadosJson = data;

            var chart = {};
            chart.type = "LineChart";
            chart.data = dadosJson;
            chart.options = {
                displayExactValues: true,
                height: 200,
                is3D: true,
                pointSize: 5
            };

            chart.formatters = {
                number: [{
                        columnNum: 1,
                        pattern: "###000"
                    }]
            };
            
            $scope.chart3 = chart;
        });
    }]);