describe("Exemplo de Teste", function () {
    it("Teste 1", function () {
        expect(pessoa.nome).toBe("João");
        expect(pessoa.idade).toBe(20);
    });

    it("Teste 2", function () {
        expect(produto.codigo).toBe(1);
        expect(produto.descricao).toBe("Tennis");
        expect(produto.emEstoque).not.toBeDefined();
        expect(produto.detalhes.marca).toBe("Nike");
    });

    it("Teste 3", function () {
        var retorno1 = produto.toString;
        expect(retorno1).toBe("undefined undefined ");
    });

    it("Teste 4", function () {
        expect(produto.palavraChave.length).toBe(3);
        addPalavraChave("Gallardo");
        expect(produto.palavraChave.length).toBe(4);
        produto.palavraChave.splice(1, 1);
        expect(produto.palavraChave.length).toBe(3);
        produto.palavraChave.splice(2, 1, "Aventador");
        expect(produto.palavraChave[2]).toEqual("Aventador");
    });
});

