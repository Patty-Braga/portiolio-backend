const nomeArquivo = 'Foto da Familia.pdf';


function validaExtencao(extensão) {
    //seleciona a extenção do arquivo
    let extArquivo = nomeArquivo.split(".");

    //verifica extenções válidas
    if (extArquivo[1] === "jpg" || extArquivo[1] === "jpeg" || extArquivo[1] === "gif" || extArquivo[1] === "png") {
        //arquivo válido
        console.log("Arquivo válido");
    } else {
        //arquivo inválido
        console.log("Arquivo inválido");
    }
}

validaExtencao(nomeArquivo)