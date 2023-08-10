const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

//filtra os programadores
const ehProgramador = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Programador";
})

//filtra programadores com mais de 20 anos
const programadorVinteAnos = ehProgramador.filter((pessoa) => {
    return pessoa.idade > 20;
})

console.log(programadorVinteAnos);


//filtra os jornalistas
const ehJornalista = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Jornalista";
})

//filtra jornalistas com mais de 30 anos
const jornalistaTrintaAnos = ehJornalista.filter((pessoa) => {
    return pessoa.idade > 30;
})

console.log(jornalistaTrintaAnos);

//filtra os jovens de até 29 anos
const jovens = pessoas.filter((pessoa) => {
    return pessoa.idade <= 29;
})

console.log(jovens);