app.service("lanchoneteAPI", ['$http', function($http) {
    this.carregarCardapio = function() {
        return $http.get("https://devweb.nexxera.com/pedidosweb/cardapio");
    };
    this.carregarPedidos = function() {
        return $http.get("https://devweb.nexxera.com/pedidosweb/pedidos");
    };
    this.salvarPedido = function(pedido) {
        return $http.post("https://devweb.nexxera.com/pedidosweb/pedidos", pedido);
    };
    this.carregarItem = function(idItem) {
        return $http.get("https://devweb.nexxera.com/pedidosweb/item/" +  idItem);
    };
}]);