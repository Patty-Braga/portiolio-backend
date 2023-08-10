let texto = "Aprenda programar do zero na Cubos Academy";
let contador = 0;

while (texto.length > contador) {
    texto = texto.replace(" ", "-");
    contador++
}

console.log(texto);