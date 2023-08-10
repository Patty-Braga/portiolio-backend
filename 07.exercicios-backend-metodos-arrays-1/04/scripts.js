const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function atendimento(paciente, oqFazer, nome) {

    if (oqFazer === 'agendar') {
        //paciente add ao final da fila

        paciente.shift(paciente[0]);
        paciente.push(paciente[0]);
        console.log(paciente.join(", "));


    } else if (oqFazer === 'atender') {
        //paciente add ao inicio da fila
        paciente.shift(nome);
        console.log(paciente.join(", "));

    }


}

atendimento(pacientes, 'agendar')

atendimento(pacientes, 'atender')