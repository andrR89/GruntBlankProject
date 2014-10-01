/**
 * Created by andre.rogerio on 11/09/2014.
 */
app.controller('carrosController', ['$scope', 'carrosAPI', '$location', '$anchorScroll', 'fabricanteAPI', function ($scope, carrosAPI, $location, $anchorScroll, fabricanteAPI) {

    $scope.carroTitulo = "Carros já¡";
    $scope.carro = {};
    $scope.carro.fabricante = {};
    $scope.listaCarros = [];
    $scope.anos = [];
    $scope.fabricantes = [];
    $scope.editIndex = -1;
    $scope.campoOrderBy = "ano";
    $scope.templateCadastroCarro = {name: 'cadastroCarro', url: 'carros/cadastroCarros.html'};
    $scope.templatePesquisaCarro = {name: 'pesquisaCarro', url: 'carros/pesquisaCarros.html'};
    $scope.templateModalsCarro = {name: 'modalsCarro', url: 'carros/modalsCarros.html'};
    $scope.carroShow = {};
    $scope.gridOptions = {};

    $scope.adicionarCarro = function (carro) {
        if ($scope.editIndex === -1) {
            $scope.listaCarros.push(angular.copy(carro));
        }
        else {
            $scope.listaCarros.splice($scope.editIndex, 1, angular.copy(carro));
        }
        $scope.editIndex = -1;
        delete $scope.carro;
        $scope.carro = {};
        $scope.$$childTail.carroForm.$setPristine();
    };

    $scope.carregarAnos = function () {
        for (i = 1900; i < 2015; i++) {
            $scope.anos.push(i);
        }
    };

    $scope.excluirCarro = function () {
        $scope.listaCarros.splice($scope.editIndex, 1);
        delete $scope.carroShow;
        $scope.cleanShow();
    };

    $scope.editarCarro = function (carro) {
        $scope.carro = angular.copy(carro);
        var fabricante;
        for (fabricante in $scope.fabricantes) {
            if ($scope.fabricantes[fabricante].nome === carro.fabricante.nome) {
                $scope.carro.fabricante = $scope.fabricantes[fabricante];
            }
        }
        $scope.editIndex = $scope.listaCarros.indexOf(carro);
    };

    $scope.limparCarro = function (carro) {
        delete $scope.carro;
        $scope.carro = {};
        $scope.$$childTail.carroForm.$setPristine();
    };

    $scope.showCarro = function (carro) {
        $scope.carroShow = angular.copy(carro);
        $scope.editIndex  = $scope.listaCarros.indexOf(carro);
    };

    $scope.cleanShow = function () {
        $scope.carroShow = {};
        $scope.carroShowPos = -1;
    };

    $scope.ordenarCarrosPor = function (campo) {
        $scope.campoOrderBy = campo;
        $scope.reverse = !$scope.reverse;
    };

    $scope.gotoCadastro = function () {
        $location.hash('cadastro');
        $anchorScroll();
    };

    $scope.gotoTopo = function () {
        $location.hash('topo');
        $anchorScroll();
    };

    $scope.iniciarListas = function () {
        $scope.carregarAnos();

        carrosAPI.carregarCarros().success(function (data, status) {
            $scope.listaCarros = data;
            $scope.carroShow = $scope.listaCarros[16];
        }).error(function (data, status) {
            console.error(data);
        });

        fabricanteAPI.carregarFabricantes().success(function (data, status) {
            $scope.fabricantes = data;
        }).error(function (data, status) {
            console.error(data);
        });

        $scope.gridOptions = {data: 'listaCarros',
            enablePinning: true,
            columnDefs: [
                {field: "ano", pinned: true,
                    displayName: 'Ano', headerClass: 'hidden-xs',
                    cellClass: "hidden-xs", width: "10%"},
                {field: "modelo", displayName: 'Modelo', width: "25%"},
                {field: "fabricante.nome", displayName: 'Fabricante'}
            ]
        };


    };

    $scope.jumpToLocation = function (key) {
        $location.hash(key);
        $anchorScroll();
        $event.preventDefault();
        $event.stopPropagation();
    };

    $scope.iniciarListas();

    $scope.currentPage = 1;
    $scope.pageSize = 10;

}]);