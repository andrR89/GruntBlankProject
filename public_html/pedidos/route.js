app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/cardapio", {templateUrl:"pedidos/cardapio.html", controller:"lanchoneteCtrl"});
    $routeProvider.when("/item/:id", {templateUrl:"pedidos/item.html", controller:"itemCtrl"});
    $routeProvider.otherwise({redirectTo: "/cardapio"});
}]);