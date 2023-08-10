const { getHours, getDay, getMinutes } = require('date-fns');

const clienteChega = new Date(2021, 3, 26, 7, 59);

const hora = getHours(clienteChega);
const minuto = getMinutes(clienteChega);
const diaDaSemana = getDay(clienteChega);


if (diaDaSemana === 0 || diaDaSemana === 6) {
    return console.log('false');
}

if (hora >= 8 && (hora <= 18 && minuto < 1)) {
    console.log('true');
} else if (hora < 18 && hora >= 8) {
    console.log('true');
} else {
    console.log('false');
}