describe("Exercicio 1 - Intro", function(){
	it("Urrrgh", function(){
		expect(pessoa.nome).toBe("João");
		expect(pessoa.idade).toBe(20);
	});

	it("Exercicio 1", function(){
		expect(produto.codigo).toBe(1);
		expect(produto.descricao).toBe("Tennis");
		expect(produto.emEstoque).not.toBeDefined();
		expect(produto.detalhes.marca).toBe("Nike");
	});

	it("Exercicio 2", function(){
		//var retorno = produto.toString();
		//expect(retorno).toBe("Tennis 89.4 Nike");
		var retorno1 = produto.toString;
		expect(retorno1).toBe("undefined undefined ");
	});

	it("Exercicio 3", function(){
		expect(produto.palavraChave.length).toBe(3);
		addPalavraChave("Gallardo");
		expect(produto.palavraChave.length).toBe(4);
		produto.palavraChave.splice(1,1);
		expect(produto.palavraChave.length).toBe(3);
		produto.palavraChave.splice(2,1, "Aventador");
		expect(produto.palavraChave[2]).toEqual("Aventador");
	});
});