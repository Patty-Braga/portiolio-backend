const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

//a) Organize o array na ordem inversa e transforme em uma única string separada por vírgulas
frutas.reverse();
let resultado = frutas.join(", ");
console.log(resultado);

//b) Remova o primeiro e último item do array original e adicione a fruta Melão ao novo array
// frutas.pop();
// frutas.shift();
frutas.reverse();
frutas.shift();
frutas.splice(frutas.length - 1, 1, "melão");
console.log(frutas);