app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/home", {templateUrl:"home.html"});
    $routeProvider.when("/carros", {templateUrl:"carros/carros.html", controller:"carrosController"});
    $routeProvider.otherwise({redirectTo: "/home"});
}]);