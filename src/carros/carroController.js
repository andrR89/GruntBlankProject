/**
 * Created by andre.rogerio on 11/09/2014.
 */
app.controller('carrosController', ['$scope', function($scope) {

        $scope.carroTitulo = "Carros Já";
        $scope.carro = {};
        $scope.listaCarros = [];
        $scope.anos = [];
        $scope.editIndex = -1;

        $scope.adicionarCarro = function(carro) {
                if ($scope.editIndex === -1)
            {
                $scope.listaCarros.push(angular.copy(carro));
                delete $scope.carro;
                $scope.editIndex = -1;
            }
            else
            {
                $scope.listaCarros.splice($scope.editIndex, 1,angular.copy(carro));
                $scope.editIndex = -1;
            }
        };

        $scope.carregarAnos = function() {
            for (i = 1900; i < 2014; i++) {
                $scope.anos.push(i);
            }
        };

        $scope.excluirCarro = function(carro) {
            $scope.listaCarros.splice($scope.listaCarros.indexOf(carro), 1);
            delete $scope.carro;
        };
        
        $scope.editarCarro = function(carro) {
            $scope.carro = angular.copy(carro);
            $scope.editIndex = $scope.listaCarros.indexOf(carro);
        };

        $scope.carregarAnos();
    }]);