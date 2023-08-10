const input = "cubos\nscubo"

function processData(input) {
    const array = input.trim().split("\n");
    let senha = array[0];
    let digitado = array[1];

    let ordemCorreta = true;

    for (let i = 0; i < senha.length; i++) {
        const index = digitado.indexOf(senha[i]);
        console.log("index: " + index)

        if (index === -1) {
            ordemCorreta = false
        } else {
            digitado = digitado.slice(index + 1);
            console.log(digitado);
        }

    }

    if (ordemCorreta) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }

}

processData(input)