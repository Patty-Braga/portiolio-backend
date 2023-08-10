const email = ".messias@cubos";

let possuiAhoba = email.includes("@");
let possuiPonto = email.includes(".");
let posicaoAhoba = email.indexOf("@");
let pontoFinal = email.lastIndexOf(".");

if (possuiAhoba) {
    //Verifica se Possui @
    if (possuiPonto) {
        // Verifica se Possui ponto
        if (pontoFinal + 1 !== email.length) {
            //Verifica se não possui . como último caractere
            if (email[0] !== ".") {
                //Verifica se não possui . como primeiro caractere
                console.log("E-mail válido")
            } else {
                console.log("E-mail inválido")
            }
        } else {
            console.log("E-mail inválido")
        }
    } else {
        console.log("E-mail inválido")
    }
} else {
    console.log("E-mail inválido")
}