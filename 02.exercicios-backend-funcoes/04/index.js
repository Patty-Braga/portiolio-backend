const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push(`Depósito de R$${(this.saldo / 100).toFixed(2)}`);
        console.log(`Depósito de R$${(this.saldo / 100).toFixed(2)} realizado para o(a) cliente: ${this.nome}`)
    },
    sacar: function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            this.historicos.push(`Saque de R$${(this.saldo / 100).toFixed(2)}`);
            console.log(`Saque de R$${(this.saldo / 100).toFixed(2)} realizado para o(a) cliente: ${this.nome}`);
        } else {

            console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$${(this.saldo / 100).toFixed(2)}`);
        console.log("Histórico:");
        historico();

    }
}

function historico() {
    for (let detalhe of contaBancaria.historicos) {
        console.log(detalhe);
    }
}


contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato(contaBancaria);

//console.log(contaBancaria);
