const { differenceInDays } = require('date-fns');

const inicioPromocao = new Date(2023, 7, 10);
const clienteSolicitaPromocao = new Date(2023, 8, 10);

const diferencaEntreDias = differenceInDays(clienteSolicitaPromocao, inicioPromocao)

console.log(diferencaEntreDias);

if (diferencaEntreDias <= 30) {
    console.log('true');
    return 'true';
} else {
    console.log('false');
    return 'false';
}