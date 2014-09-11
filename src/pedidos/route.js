app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/home", {templateUrl:"home.html"});
    $routeProvider.when("/carros", {templateUrl:"carros/carros.html", controller:"carrosController"});
    $routeProvider.when("/cardapio", {templateUrl:"pedidos/cardapio.html", controller:"lanchoneteCtrl"});
    $routeProvider.when("/item/:id", {templateUrl:"pedidos/item.html", controller:"itemCtrl"});
    $routeProvider.otherwise({redirectTo: "/home"});
}]);