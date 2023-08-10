const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function carros(carro, index) {
    const resultado = carro.slice(index, 6);
    console.log(resultado);

}

carros(nomes, posicao);