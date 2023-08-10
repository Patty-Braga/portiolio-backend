const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(paciente, nome) {
    //paciente add ao final da fila
    paciente.push(nome);
    paciente.shift(nome);
    console.log(paciente.join(", "));
}

function atenderPaciente(paciente) {
    //paciente add ao inicio da fila
    paciente.shift(paciente[0]);
    console.log(paciente.join(", "));
}

function cancelarAtendimento(paciente, pacienteCancela) {
    //remove o nome do paciente que irá cancelar
    let cancelar = paciente.indexOf(pacienteCancela);
    paciente.splice(cancelar, 1)
    console.log(paciente.join(", "));
}

agendarPaciente(pacientes, 'Patty');

atenderPaciente(pacientes);

cancelarAtendimento(pacientes, 'João');