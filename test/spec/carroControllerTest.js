describe("Exemplo de Teste para o Controller de carro", function () {
    var scope;
    beforeEach(module('blankApp'));
    
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        //precisamos mockar o pristine, pois a funcao de adicionar utiliza-o.
        scope.$$childTail = {};
        scope.$$childTail.carroForm = {};
        scope.$$childTail.carroForm.$setPristine = function(){};
        controller = $controller('carrosController', {
            '$scope': scope
        });
    }));
    
    it('Compara o título do Controller', function () {
        expect(scope.carroTitulo).toBe('Carros JÃ¡');
    });
    
    it('Valida a função de adicionarCarros', function () {
        var carroNovo = {
            "ano": 2014,
            "modelo": "Mustang GT V8",
            "imageURL": "http://msalx.quatrorodas.abril.com.br/2014/06/01/1513/YFffO/558485640190616947.jpeg",
            "fabricante": {
                "nome": "Ford",
                "pais": "EUA"
            }
        };
        //guardo o tamanho original da lista de carros;
        var tamanho = scope.listaCarros.length;
        //adiciono um novo carro;
        scope.adicionarCarro(carroNovo);
        //compara o tamanho da lista atual com o tamanho da lista antiga somado 1;
        expect(tamanho + 1).toBe(scope.listaCarros.length);
    });
});

