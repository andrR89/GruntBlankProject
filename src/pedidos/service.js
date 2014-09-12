app.service("lanchoneteAPI", ['$http', function($http) {
    this.carregarCardapio = function() {
        return $http.get("pedidos/cardapio.json");
    };
    this.carregarPedidos = function() {
        return $http.get("pedidos/pedidos.json");
    };
    this.salvarPedido = function(pedido) {
        return null;
    };
    this.carregarItem = function(idItem) {
        return null;
    };
}]);