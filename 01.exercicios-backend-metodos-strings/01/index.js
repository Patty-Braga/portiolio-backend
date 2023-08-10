const comentario = "Esse COVID é muito perigoso !";

const palavrasBloqueadas = ["covid", "COVID", "PANDEMIA", "pandemia", "Covid", "Pandemia"];

let bloqueado = false;
for (let palavra of palavrasBloqueadas) {
    if (comentario.includes(palavra)) {
        bloqueado = true;
    }
}
if (bloqueado === true) {
    console.log(`Comentário bloqueado por conter palavras proibidas`)
} else {
    console.log(`Comentário autorizado`)
}
