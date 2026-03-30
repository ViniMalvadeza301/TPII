// PRODUTO ABSTRATO (ABSTRAÇÃO)

class Veiculo {
    entregar(){};
}

// PRODUTO CONCRETO

class Caminhao extends Veiculo {
    entregar() {
        console.log("Entrega feita a caminhão!");
    }
}

class Navio extends Veiculo {
    entregar() {
        console.log("Entrega feita a Navio!");
    }
}

class Drone extends Veiculo {
    entregar() {
        console.log("Entrega feita a drone!");
    }
}

// FABRICA ABSTRATA

class FabricaLogistica {
    criarVeiculo() {
        return new Veiculo();
    }

    implementarVeiculo() {
        const v = this.criarVeiculo();
        v.entregar();
    }
}

// FABRICA CONCRETA

class FabricaCaminhao extends FabricaLogistica {
    criarVeiculo() {
        return new Caminhao();
    }
}

class FabricaNavio extends FabricaLogistica {
    criarVeiculo() {
        return new Navio();
    }
}

class FabricaDrone extends FabricaLogistica {
    criarVeiculo() {
        return new Drone();
    }
}

// USO

const caminhao = new FabricaCaminhao();
caminhao.criarVeiculo();
caminhao.implementarVeiculo();

const navio = new FabricaNavio();
navio.criarVeiculo();
navio.implementarVeiculo();

const drone = new FabricaDrone();
drone.criarVeiculo();
drone.implementarVeiculo();