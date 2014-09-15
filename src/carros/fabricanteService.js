app.service("carrosAPI", ['$http', function($http) {
    this.carregarCarros = function() {
        return $http.get("carros/carros.json");
    };
}]);