const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        let qtdTotal = 0;
        let precoTotal = 0;
        for (let itens of this.produtos) {
            qtdTotal += itens.qtd;
            precoTotal += itens.precoUnit * itens.qtd;
        }
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${qtdTotal} itens`);
        console.log(`Total a pagar: R$${(precoTotal / 100).toFixed(2)}`);
    },
    addProduto: function (produto) {
        repetido = false;
        for (let item of this.produtos) {
            if (item.id === produto.id) {
                repetido = true;
            }
        }
        if (repetido) {
            const posicaoProduto = this.produtos.findIndex((item) => (item.id === produto.id));
            //console.log(posicaoProduto);
            this.produtos[posicaoProduto].qtd += produto.qtd;
        } else {
            this.produtos.push(produto);
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(``);
        indice(carrinho);
        console.log(``);
        console.log(`Total de itens: ${this.calcularTotaldeItens(carrinho)} itens`);
        console.log(`Valor Total: R$${(this.calcularTotalAPagar(carrinho) / 100).toFixed(2)}`);
        console.log(`Desconto: R$${(this.calcularDesconto(carrinho) / 100).toFixed(2)}`);
        console.log(`Total com desconto: R$${((this.calcularTotalAPagar(carrinho) / 100) - (this.calcularDesconto(carrinho) / 100)).toFixed(2)}`);
    },
    calcularTotaldeItens: function () {
        let qtdTotal = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            qtdTotal += this.produtos[i].qtd;
        }
        return qtdTotal;
    },
    calcularTotalAPagar: function () {
        let precoTotal = 0;
        for (let itens of this.produtos) {
            precoTotal += itens.precoUnit * itens.qtd;
        }
        return precoTotal
    },
    calcularDesconto: function () {
        let desconto = 99999999999;
        let teste = 0
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.calcularTotaldeItens(carrinho) >= 4) {
                if (desconto >= this.produtos[i].precoUnit) {
                    desconto = this.produtos[i].precoUnit;
                }
                teste = (this.calcularTotalAPagar(carrinho) * 10) / 100;
                if (teste > desconto) {
                    desconto = teste;
                }

            } else if (this.calcularTotalAPagar(carrinho) >= 10000) {
                desconto = (this.calcularTotalAPagar(carrinho) * 10) / 100;
            }
        }
        return desconto;
    }
}

function indice(carrinho) {
    for (let i = 0; i < carrinho.produtos.length; i++) {
        console.log(`Item ${carrinho.produtos[i].id} - ${carrinho.produtos[i].nome} - ${carrinho.produtos[i].qtd} und - R$ ${(carrinho.produtos[i].precoUnit / 100).toFixed(2)}`);
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}


carrinho.addProduto(novoTenis);
//carrinho.imprimirResumo();

carrinho.addProduto(novaBermuda);
//carrinho.imprimirResumo();

carrinho.imprimirDetalhes();

