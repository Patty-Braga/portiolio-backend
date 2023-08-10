const { differenceInHours } = require('date-fns');

const inicioPromocao = new Date(2023, 7, 10, 9);
const clienteSolicitaPromocao = new Date(2023, 7, 10, 15);

const diferencaEntreHoras = differenceInHours(clienteSolicitaPromocao, inicioPromocao)

//console.log(diferencaEntreHoras);

if (diferencaEntreHoras <= 24) {
    console.log('true');
    return 'true';
} else {
    console.log('false');
    return 'false';
}
