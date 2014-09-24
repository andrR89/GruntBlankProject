/**
 * Created by andre.rogerio on 11/09/2014.
 */
app.controller('carrosController', ['$scope', 'carrosAPI', '$location', '$anchorScroll', 'fabricanteAPI', function($scope, carrosAPI, $location, $anchorScroll, fabricanteAPI) {

        $scope.carroTitulo = "Carros JÃ¡";
        $scope.carro = {};
        $scope.carro.fabricante = {};
        $scope.listaCarros = [];
        $scope.anos = [];
        $scope.fabricantes = [];
        $scope.editIndex = -1;
        $scope.campoOrderBy = "ano";
        $scope.templateCadastroCarro = {name: 'cadastroCarro', url: 'carros/cadastroCarros.html'};
        $scope.templatePesquisaCarro = {name: 'pesquisaCarro', url: 'carros/pesquisaCarros.html'};
        $scope.templateCode = {name: 'HTML - Pesquisa Carro', url: 'carros/code-pesquisa.html'};
        $scope.carroShow = {};

        $scope.templatesCode = [
            {name: 'Javascript - Carro Controller', url: 'carros/code-carro-controller.html'},
            {name: 'HTML - Pesquisa Carro', url: 'carros/code-pesquisa.html'},
            {name: 'HTML - Modal Carro', url: 'carros/code-modal.html'},
            {name: 'HTML - Cadastro Carro', url: 'carros/code-cadastro.html'},
        ];


        $scope.adicionarCarro = function(carro) {
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

        $scope.carregarAnos = function() {
            for (i = 1900; i < 2015; i++) {
                $scope.anos.push(i);
            }
        };

        $scope.excluirCarro = function(carro) {
            $scope.listaCarros.splice($scope.listaCarros.indexOf(carro), 1);
            delete $scope.carro;
            $scope.carro = {};
            $scope.editIndex = -1;
        };

        $scope.editarCarro = function(carro) {
            $scope.carro = angular.copy(carro);
            
            var fabricante;
            for (fabricante in $scope.fabricantes) {
                if ($scope.fabricantes[fabricante].nome === carro.fabricante.nome)
                {
                    $scope.carro.fabricante = $scope.fabricantes[fabricante];
                    console.log($scope.fabricantes[fabricante]);
                }
            }
            
            
            
            $scope.editIndex = $scope.listaCarros.indexOf(carro);
            $scope.gotoCadastro();
        };

        $scope.showCarro = function(carro) {
            $scope.carroShow = angular.copy(carro);
        };

        $scope.cleanShow = function(carro) {
            $scope.carroShow = {};
        };


        $scope.ordenarCarrosPor = function(campo) {
            $scope.campoOrderBy = campo;
            console.log($scope.campoOrderBy);
            $scope.reverse = !$scope.reverse;
            console.log($scope.reverse);
        };

        $scope.gotoCadastro = function() {
            $location.hash('cadastro');
            $anchorScroll();
        };

        $scope.gotoTopo = function() {
            $location.hash('topo');
            $anchorScroll();
        };

        $scope.iniciarListas = function()
        {
            $scope.carregarAnos();

            carrosAPI.carregarCarros().success(function(data, status) {
                $scope.listaCarros = data;
            }).error(function(data, status) {
                console.error(data);
            });

            fabricanteAPI.carregarFabricantes().success(function(data, status) {
                $scope.fabricantes = data;
            }).error(function(data, status) {
                console.error(data);
            });
        };


        $scope.alterarSource = function(templateCodePesquisa){
            $scope.templateCode = angular.copy(templateCodePesquisa);
             setTimeout(function(){
                $('#urrgh').removeClass("prettyprinted");
                prettyPrint();
                console.log("Limpado!")
            }, 500);
        };
        $scope.iniciarListas();
    }]);