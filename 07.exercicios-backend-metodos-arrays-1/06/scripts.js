const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function donoDoPet() {
    let buscaDono = "bozo"
    let contador = 0
    for (let i of usuarios) {
        if (i.pets.includes(buscaDono)) {
            console.log(`O(A) dono(a) de ${buscaDono} é o(a) ${i.nome}`);
            contador++;
            break;
        }
    }
    if (contador < 1) {
        console.log(`Que pena ${buscaDono}, não conseguimos encontrar seu dono(a)`)
    }
}

donoDoPet(usuarios);