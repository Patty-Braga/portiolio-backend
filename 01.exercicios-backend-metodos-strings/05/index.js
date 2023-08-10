const numeroCartao = '1111222233334444';

//separa os 4 primeiros dígitos
let digIniciais = numeroCartao.slice(0, 4);

//oculta os dígitos do meio
let digOcultos = "";
let digMeio = numeroCartao.length - 8;
let contador = 0;
while (digMeio > contador) {
    contador++
    digOcultos += "*";
}

//separa os 4 últimos dígitos
let digFinais = numeroCartao.slice(numeroCartao.length - 4);

console.log(digIniciais + digOcultos + digFinais);