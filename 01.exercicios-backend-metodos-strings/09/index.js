const nome = 'Guido Cerqueira';

function funcaoNickname(apelido) {

    let nickName = "";

    // Não deve existir espaços em branco;                  - ok
    for (let letra of nome) {
        if (!letra.includes(" ")) {
            nickName += letra;
        }
    }

    // Deve começar sempre com "@";                         - ok
    nickName = "@" + nickName

    // O nickname deve conter, no máximo, 13 caracteres;    - ok
    let limiteCarac = nickName.slice(0, 13);

    // São permitidos apenas caracteres minúsculos.         - ok
    limiteCarac = limiteCarac.toLocaleLowerCase();

    console.log(limiteCarac);
}

funcaoNickname(nome)