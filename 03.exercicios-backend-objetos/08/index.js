const usuarios = [
    {
        nome: "João",
        pets: [],
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

let petOuPets = 0;
for (let i = 0; i < usuarios.length; i++) {
    //console.log(usuarios[i].pets.length)
    if (usuarios[i].pets.length > 0) {

        petOuPets = (usuarios[i].pets.length === 1 ? "pet" : "pets")
        console.log(`Sou ${usuarios[i].nome} e tenho ${usuarios[i].pets.length} ${petOuPets}.`)

    } else {

        console.log(`Sou ${usuarios[i].nome} e não tenho pets.`)

    }
}

