const cpf = "12345678900";
const cnpj = "12345678000199";

function validadorCPF(documentoCPF) {

    let cpfParte1 = "";
    let cpfParte2 = "";
    let cpfParte3 = "";
    let cpfParte4 = "";

    if (cpf.length === 11) {
        // se o cpf é valido
        cpfParte1 = String(cpf).slice(0, 3) + ".";
        cpfParte2 = String(cpf).slice(3, 6) + ".";
        cpfParte3 = String(cpf).slice(6, 9) + "-";
        cpfParte4 = String(cpf).slice(9);

        cpfFormatado = cpfParte1 + cpfParte2 + cpfParte3 + cpfParte4

        console.log(cpfFormatado);
    } else {
        //se o cpf é inválido
        console.log("CPF inválido");
    }
}


function validadorCNPJ(documentoCNPJ) {

    let cnpjParte1 = "";
    let cnpjParte2 = "";
    let cnpjParte3 = "";
    let cnpjParte4 = "";
    let cnpjParte5 = "";

    if (cnpj.length === 14) {
        // se o cnpj é valido
        cnpjParte1 = String(cnpj).slice(0, 2) + ".";
        cnpjParte2 = String(cnpj).slice(3, 5) + ".";
        cnpjParte3 = String(cnpj).slice(5, 8) + "/";
        cnpjParte4 = String(cnpj).slice(8, 12) + "-";
        cnpjParte5 = String(cnpj).slice(12);

        cnpjFormatado = cnpjParte1 + cnpjParte2 + cnpjParte3 + cnpjParte4 + cnpjParte5

        console.log(cnpjFormatado);
    } else {
        //se o cnpj é inválido
        console.log("CNPJ inválido");
    }
}

validadorCPF(cpf);
validadorCNPJ(cnpj);