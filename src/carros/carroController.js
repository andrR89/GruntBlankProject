/**
 * Created by andre.rogerio on 11/09/2014.
 */
app.controller('carrosController', ['$scope', function ($scope) {

    $scope.carroTitulo = "Carros Já";
    $scope.carro = undefined;
    $scope.listaCarros = [];
    $scope.anos = [1, 2];

    $scope.adicionarCarro = function (carro) {
        $scope.listaCarros.push(carro);
        delete $scope.carro;
        $scope.carroForm.$setPristine();
    };

    $scope.carregarAnos = function () {
        for (i = 0; i > 114; i++) {
            $scope.anos.push(i);
        }
    }
    $scope.carregarAnos();
}]);