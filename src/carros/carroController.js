/**
 * Created by andre.rogerio on 11/09/2014.
 */
app.controller('carrosController', ['$scope', 'carrosAPI', '$location', '$anchorScroll' , function ($scope, carrosAPI, $location, $anchorScroll) {

        $scope.carroTitulo = "Carros Já";
        $scope.carro = {};
        $scope.listaCarros = [];
        $scope.anos = [];
        $scope.editIndex = -1;
        $scope.campoOrderBy = "ano";
        $scope.templateCadastroCarro = {name: 'cadastroCarro', url: 'carros/cadastroCarros.html'};
        $scope.templatePesquisaCarro = {name: 'pesquisaCarro', url: 'carros/pesquisaCarros.html'};
        $scope.carroShow = {};

        $scope.iniciarLista = function ()
        {
            carrosAPI.carregarCarros().success(function (data, status) {
                $scope.listaCarros = data;
            }).error(function (data, status) {
                console.error(data);
            });
        };

        $scope.adicionarCarro = function (carro) {
            if ($scope.editIndex === -1) {
                $scope.listaCarros.push(angular.copy(carro));
                delete $scope.carro;
                $scope.editIndex = -1;
            }
            else {
                $scope.listaCarros.splice($scope.editIndex, 1, angular.copy(carro));
                $scope.editIndex = -1;
                delete $scope.carro;
            }
            $scope.$$childTail.carroForm.$setPristine();
        };

        $scope.carregarAnos = function () {
            for (i = 1900; i < 2015; i++) {
                $scope.anos.push(i);
            }
        };

        $scope.excluirCarro = function (carro) {
            $scope.listaCarros.splice($scope.listaCarros.indexOf(carro), 1);
            delete $scope.carro;
        };

        $scope.editarCarro = function (carro) {
            $scope.carro = angular.copy(carro);
            $scope.editIndex = $scope.listaCarros.indexOf(carro);
            $scope.gotoCadastro();
        };

        $scope.showCarro = function (carro) {
            $scope.carroShow = angular.copy(carro);
        };

        $scope.cleanShow = function (carro) {
            $scope.carroShow = {};
        };


        $scope.ordenarCarrosPor = function (campo) {
            $scope.campoOrderBy = campo;
            console.log($scope.campoOrderBy);
            $scope.reverse = !$scope.reverse;
            console.log($scope.reverse);
        };
        
        $scope.gotoCadastro = function () {
            $location.hash('cadastro');
            $anchorScroll();
        };
        
        $scope.gotoTopo = function () {
            $location.hash('topo');
            $anchorScroll();
        };


        $scope.carregarAnos();
        $scope.iniciarLista();
    }]);