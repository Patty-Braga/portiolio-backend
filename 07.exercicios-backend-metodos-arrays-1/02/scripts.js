const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function formarGrupos(nome, quantNoGrupo) {
    let grupoFormado1 = [];
    let grupoFormado2 = [];
    let grupoFormado3 = [];
    let grupoFormado4 = [];
    let grupoFormado5 = [];
    let grupo1 = "";
    let grupo2 = "";
    let grupo3 = "";
    let grupo4 = "";
    let grupo5 = "";
    for (let i of nomes) {
        grupoFormado1 = nome.slice(0, tamanhoDoGrupo);
        grupo1 = grupoFormado1.join(", ");
    }
    for (let i of nomes) {
        grupoFormado2 = nome.slice(tamanhoDoGrupo, tamanhoDoGrupo * 2);
        grupo2 = grupoFormado2.join(", ");
    }
    for (let i of nomes) {
        grupoFormado3 = nome.slice(tamanhoDoGrupo * 2, tamanhoDoGrupo * 3);
        grupo3 = grupoFormado3.join(", ");
    }
    for (let i of nomes) {
        grupoFormado4 = nome.slice(tamanhoDoGrupo * 3, tamanhoDoGrupo * 4);
        grupo4 = grupoFormado4.join(", ");
    }
    for (let i of nomes) {
        grupoFormado5 = nome.slice(tamanhoDoGrupo * 4, tamanhoDoGrupo * 5);
        grupo5 = grupoFormado5.join(", ");
    }

    console.log(`Grupo 1: ${grupo1}`);
    console.log(`Grupo 2: ${grupo2}`);
    // console.log(`Grupo 3: ${grupo3}`);
    // console.log(`Grupo 4: ${grupo4}`);
    // console.log(`Grupo 5: ${grupo5}`);
}

formarGrupos(nomes, tamanhoDoGrupo);