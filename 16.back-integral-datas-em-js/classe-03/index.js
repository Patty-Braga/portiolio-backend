const { getHours, getMinutes } = require('date-fns')

const clienteChega = new Date(2015, 1, 1, 17, 5)

const hora = getHours(clienteChega)
const minuto = getMinutes(clienteChega)

if (hora >= 8 && (hora <= 18 && minuto < 1)) {
    console.log('true');
} else if (hora < 18 && hora >= 8) {
    console.log('true');
} else {
    console.log('false');
}