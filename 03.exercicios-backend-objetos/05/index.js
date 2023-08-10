

const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [

    ]
}

const aula = [
    {
        Identificador: 1,
        Nome_da_aula: 'Introdução a programação',
    },
    {
        Identificador: 2,
        Nome_da_aula: 'Variáveis',
    },
    {
        Identificador: 3,
        Nome_da_aula: 'Condicionais',
    },
    {
        Identificador: 4,
        Nome_da_aula: 'Arrays',
    },
]


for (let i = 0; i < aula.length; i++) {

    curso.aulas.push(aula[i])
    //console.log(aula[i]);
}

console.log(curso);


