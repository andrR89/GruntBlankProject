/**
 * Monta estrutura básica dos filtros
 */
app.directive('ngFiltro', function() {
	return {
		restrict: 'E',
                transclude: true,
		replace: true,
		scope: {
			filtros: '=',
			placeholder: '@',
			rota: '@',
			usuario: '@',
			funcaoPesquisar: '&'
		},
		link: function(scope, element, attrs ) {
                        //@TODO - Chamar API
                        //Busca os parâmetros de filtro
//			var dataParametro = {usuario: scope.usuario, rota: scope.rota};
//			$http.get("http://eng63/nmercantil/rest/parametro-filtro", {params: dataParametro}).success(function(data) {
//				scope.parametrosFiltro = data;
//			});

                        //MOCK
                        scope.parametrosFiltro = [{ttParametros: '{"ano":"2014","modelo":"Onix","fabricante":"Chevrolet"}', dsNome: 'Filtro 1'}];

			//Efetua pesquisa
			scope.pesquisar = function (filtros) {
				return scope.funcaoPesquisar({filtros : filtros});
			};
			
			//Habilita a div de busca avançada
			scope.buscasAvancada = function() {
				scope.showBuscaAvancada = !scope.showBuscaAvancada; 
			};
			
			//Limpa os filtros da consulta avançada
			scope.limparFiltros = function() {
				scope.filtros = {};
			};
			
			//Pega os parâmetros de busca
			scope.setParametros = function(param) {
				scope.showBuscaAvancada = true;

				scope.filtros = angular.fromJson(param);
			};
			
			//Salva os parâmetros para o usuário
			scope.salvarParametros = function(descricao) {
				//Busca os parâmetros de filtro
				var dataParametro = {dsNome: descricao, ttParametros: JSON.stringify(scope.filtros)};
                                
                                scope.parametrosFiltro.unshift(dataParametro);
                                
                                $('#filtroModal').modal('hide');

//@TODO: Utilizar API
//                              var dataParametro = {descricao: descricao, usuario: scope.usuario, rota: scope.rota, parametros: JSON.stringify(scope.filtros)};
//				$http.post("http://eng63/nmercantil/rest/parametro-filtro", dataParametro).success(function(data) {
//                                        console.log(data);
//					//Salvo com sucesso
//					if (data.success) {
//						$('#filtroModal').modal('hide');
//						
//						//Insere no início do array
//						scope.parametrosFiltro.unshift(data.data);
//					}
//                                        
//                                        //@TODO: Tratar falha
//				});
			};
	    },
            templateUrl: "shared/directives/filtro/filtro.html"
	}
});