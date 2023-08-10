const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado === true) {
            //carro ligado
            console.log("Este carro já está ligado");
        } else {
            //carro desligado
            this.ligado = true;
            console.log(`Carro ligado. Velocidade ${carro.velocidade}`)
        }
    },
    desligar: function () {
        if (this.ligado !== true) {
            //carro desligado
            console.log("Este carro já está desligado");
        } else {
            //carro ligado
            this.ligado = false;
            this.velocidade = 0;
            console.log(`Carro desligado. Velocidade ${carro.velocidade}`)
        }
    },
    acelerar: function () {
        if (this.ligado === true) {
            this.velocidade += 10;
            console.log(`Carro ligado. Velocidade ${carro.velocidade}`)
        } else {
            console.log("Não é possível acelerar um carro desligado");
        }
    },
    desacelerar: function () {
        if (this.ligado === true) {
            this.velocidade -= 10;
            console.log(`Carro ligado. Velocidade ${carro.velocidade}`)
        } else {
            console.log("Não é possível desacelerar um carro desligado");
        }
    }
}

carro.desligar();  // Desligar o carro
carro.ligar();  // Ligar o carro
carro.ligar();  // Ligar o carro
carro.acelerar();   // Acelerar o carro
carro.acelerar();   // Acelerar o carro
carro.desacelerar();    // Desacelerar o carro
carro.desligar();   // Desligar o carro
carro.acelerar();   // Acelerar o carro
carro.desacelerar();    // Desacelerar o carro