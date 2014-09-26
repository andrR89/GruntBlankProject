var pessoa  = {
	nome : "João",
	idade : 20
};

var produto  = {
	codigo : 1,
	descricao : "Sapato",
	emEstoque : false
};

produto.emEstoque = true;
produto.detalhes = {tamanho :48, cor : "Vermelho"};
produto.preco = 89.40;
produto.descricao = "Tennis";
delete produto.emEstoque;
produto.detalhes.marca = "Nike";

produto.toString = function()
{
	return this.descricao + " " + this.preco + " " + this.detalhes.marca;
}

function toString()
{
	return this.descricao + " " + this.preco + " ";
}

produto.toString = toString();

produto.palavraChave = [];
produto.palavraChave[0] = "Diablo";
produto.palavraChave[1] = "Estorque";
produto.palavraChave[2] = "Miura";
produto.palavraChave.length;

function addPalavraChave(valor)
{
	produto.palavraChave.push(valor);
}

quantidadeCarros = 0;

angular.module('myApp', [])
.controller('MainController', function($scope) {
  $scope.name = "Ari";
  $scope.sayHello = function() {
    $scope.greeting = "Hello " + $scope.name;
  }
})