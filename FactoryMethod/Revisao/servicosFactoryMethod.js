// PRODUTO ABSTRATO (ABSTRAÇÃO)

class Agendamento {
    agendar() {};
}

// PRODUTO CONCRETO

class Consulta extends Agendamento {
    agendar() {
        console.log("Consulta agendada!");
    }
}

class Reparo extends Agendamento {
    agendar() {
        console.log("Reparo agendado!");
    }
}

class Entrega extends Agendamento {
    agendar() {
        console.log("Entrega agendada!");
    }
}

// FABRICA ABSTRATA

class FabricaAgendamento {
    criarAgendamento() {
        return new Agendamento();
    }

    implementar() {
        const s = this.criarAgendamento();
        s.agendar();
    }
}

// FABRICA CONCRETA

class FabricaConsulta extends FabricaAgendamento {
    criarAgendamento() {
        return new Consulta();
    }
}

class FabricaReparo extends FabricaAgendamento {
    criarAgendamento() {
        return new Reparo();
    }
}

class FabricaEntrega extends FabricaAgendamento {
    criarAgendamento() {
        return new Entrega();
    }
}

// USO

const consulta = new FabricaConsulta();
consulta.criarAgendamento()
consulta.implementar();

const reparo = new FabricaReparo();
reparo.criarAgendamento();
reparo.implementar();

const entrega = new FabricaEntrega();
entrega.criarAgendamento();
entrega.implementar();
