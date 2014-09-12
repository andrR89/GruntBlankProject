app.controller('templateController', ['$scope', function($scope) {
    $scope.templateHeader = { name: 'header', url: 'header.html'};
    $scope.templateFooter = { name: 'footer', url: 'footer.html'};
    $scope.templateCadastroCarro = { name: 'cadastroCarro', url: 'carros/cadastroCarros.html'};
    $scope.templatePesquisaCarro = { name: 'PesquisaCarro', url: 'carros/pesquisaCarros.html'};
  }]);

app.controller("itemCtrl", ['$scope','$routeParams','lanchoneteAPI' , function($scope, $routeParams, lanchoneteAPI) {
    $scope.item = lanchoneteAPI.carregarItem($routeParams.id).success(function (data, status) {
        $scope.item = data;
    }).error(function (data,status) {
        console.error(data);
    });
}]);

app.controller("lanchoneteCtrl", ['$scope', '$http', 'lanchoneteAPI',  function($scope, $http, lanchoneteAPI) {
    $scope.titulo = "Lanchonete do Zé";
    $scope.campoOrderBy = "descricao";

    $scope.lanchonete = {};
    $scope.lanchonete.produtos = [];
    $scope.lanchonete.carrinho = {produtos: [], total: 0};
    $scope.lanchonete.pedidos = [];

    var itensPorPagina = 10;

    $scope.carregarProdutos = function() {
        lanchoneteAPI.carregarCardapio().success(function (data, status) {
            $scope.lanchonete.produtos = data;
        }).error(function (data,status) {
            console.error(data);
        });
    };


    $scope.adicionarItemAoCarrinho = function (item) {
        var position;
        for (var i in $scope.lanchonete.carrinho.produtos) {
            if ($scope.lanchonete.carrinho.produtos[i].produto.id === item.produto.id) {
                position = i;
                break; 
            }
        }

        if (position >= 0) {
            $scope.lanchonete.carrinho.produtos[position].quantidade = $scope.lanchonete.carrinho.produtos[position].quantidade + item.quantidade;
            $scope.lanchonete.carrinho.total += item.quantidade * item.produto.preco;
        } else {
            $scope.lanchonete.carrinho.produtos.push(angular.copy(item));
            $scope.lanchonete.carrinho.total += item.quantidade * item.produto.preco;
        }
        delete $scope.item;
        $scope.compraForm.$setPristine();
    };

    $scope.cancelarProduto = function (item) {
        $scope.lanchonete.carrinho.produtos.splice($scope.lanchonete.carrinho.produtos.indexOf(item), 1);
        $scope.lanchonete.carrinho.total -= item.quantidade * item.produto.preco;
    };

    $scope.finalizarPedido = function () {
        $scope.lanchonete.carrinho.numeroPedido = $scope.lanchonete.pedidos.length;
        $scope.lanchonete.carrinho.dataPedido = new Date();

        for (var i in $scope.lanchonete.carrinho.produtos) {
            var pedido = {};
            pedido.quantidade = $scope.lanchonete.carrinho.produtos[i].quantidade;
            pedido.item = {
                id:$scope.lanchonete.carrinho.produtos[i].produto.id,
                descricao:$scope.lanchonete.carrinho.produtos[i].produto.descricao,
                preco:$scope.lanchonete.carrinho.produtos[i].produto.preco,
                imagem:$scope.lanchonete.carrinho.produtos[i].produto.imagem,
                detalhes:$scope.lanchonete.carrinho.produtos[i].produto.detalhes
            };

            lanchoneteAPI.salvarPedido(pedido).success(function (data, status) {
                console.log("OK!");
                $scope.carregarPedidos();
            }).error(function (data,status) {
                console.error(data);
            });
        }
        $scope.carregarPedidos();
        $scope.lanchonete.carrinho = {produtos: [], total: 0};

    };

    $scope.carregarPedidos = function() {
        lanchoneteAPI.carregarPedidos().success(function (data, status) {
            $scope.lanchonete.pedidos = data;
            $scope.lanchonete.pedidosExibir = $scope.lanchonete.pedidos.slice(0,itensPorPagina);
        }).error(function (data,status) {
            console.error(data);
        });

    };

    $scope.exibirDetalhesPedido = function(pedido) {
        $scope.detalhesPedido = pedido;
    };
    $scope.fecharDetalhesPedido = function() {
        delete $scope.detalhesPedido;
    };
    $scope.ordenarPor = function(campo) {
        $scope.campoOrderBy = campo;
        $scope.reverse = !$scope.reverse;
    };

    $scope.irParaPagina = function(pagina) {
        console.log("oi");
        $scope.lanchonete.pedidosExibir = $scope.lanchonete.pedidos.slice(itensPorPagina*pagina,(itensPorPagina*pagina) + itensPorPagina);
        console.log($scope.lanchonete.pedidos);
        console.log($scope.lanchonete.pedidosExibir);
    };


    $scope.carregarPedidos();
    $scope.carregarProdutos();
}]);