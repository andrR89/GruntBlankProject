app.service("fabricanteAPI", ['$http', function($http) {
    this.carregarFabricantes = function() {
        return $http.get("carros/fabricantes.json");
    };
}]);