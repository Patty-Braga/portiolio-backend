const { getHours, getDay, getMinutes } = require('date-fns');

const clienteChega = new Date(2021, 3, 25, 12);

const hora = getHours(clienteChega);
const minuto = getMinutes(clienteChega);
const diaDaSemana = getDay(clienteChega);


if (diaDaSemana === 0) {
    return console.log('false');
}

if (diaDaSemana === 6) {
    if (hora >= 8 && hora >= 12) {
        return console.log('true');
    }
}

if (hora >= 8 && (hora <= 18 && minuto < 1)) {
    console.log('true');
} else if (hora < 18 && hora >= 8) {
    console.log('true');
} else {
    console.log('false');
}