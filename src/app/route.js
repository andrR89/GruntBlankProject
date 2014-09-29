app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/home", {templateUrl:"home.html"});
    $routeProvider.when("/instalacao", {templateUrl:"componentes/instalacao/instalacao.html"});
    $routeProvider.when("/carros", {templateUrl:"carros/carros.html", controller:"carrosController"});
    $routeProvider.when("/chart",  {templateUrl:"componentes/chart/chart.html", controller:"chartController"});
    $routeProvider.when("/filtro", {templateUrl:"componentes/filtro/filtro.html", controller:"filtroController"});
    $routeProvider.when("/dialog", {templateUrl:"componentes/dialog/dialog.html", controller:"carrosController"});
    $routeProvider.when("/calendar", {templateUrl:"componentes/calendar/calendar.html", controller:"calendarController"});
    $routeProvider.when("/masks", {templateUrl:"componentes/masks/masks.html", controller:"masksController"});
    $routeProvider.when("/popover", {templateUrl:"componentes/popover/popover.html", controller:"popoverController"});
    $routeProvider.otherwise({redirectTo: "/home"});
}]);
