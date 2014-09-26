/**
 * Created by alair.tavares on 17/09/2014.
 */
app.controller('filtroController', ['$scope', function ($scope) {
    $scope.filtros = {};
    $scope.dataComboFornecedores = [{"key": 'Chevrolet', "value": 'Chevrolet'}];

    $scope.pesquisar = function(filtros) {
           alert('Filtros: ' + JSON.stringify(filtros));
    };
}]);