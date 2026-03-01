// PRODUTOS ABSTRATOS

class RoboMontador {
    funcao() {
        throw new Error("funcao() deve ser implementado!");
        
    }
}

class RoboInspetor {
    funcao() {
        throw new Error("funcao() deve ser implementado!");
        
    }
}

// PRODUTO CONCRETO - AUTOMOTIVA

class AutomotivaMontador extends RoboMontador {
    funcao() {
        return `Linha Automotiva: Robo Montador`;
    }
}

class AutomotivaInspetor extends RoboInspetor {
    funcao() {
        return `Linha Automotiva: Robo Inspetor`;
    }
}

// PRODUTO CONCRETO - ELETRÔNICA

class EletronicaMontador extends RoboMontador {
    funcao() {
        return `Linha Eletrônica: Robo Montador`;
    }
}

class EletronicaInspetor extends RoboInspetor {
    funcao() {
        return `Linha Eletrônica: Robo Inspetor`;
    }
}

// FABRICA ABSTRATA

class FabricaRobos {
    criarMontador() {
        throw new Error("criarMontador() deve ser implementado!");
        
    }

    criarInspetor() {
        throw new Error("criarInspetor() deve ser implementado!");
        
    }
}

// FABRICA CONCRETA - AUTOMATIVA

class FabricaAutomotiva extends FabricaRobos {
    criarMontador() {
        return new AutomotivaMontador();
    }

    criarInspetor() {
        return new AutomotivaInspetor();
    }
}

// FABRICA CONCRETA - ELETRÔNICA

class FabricaEletronica extends FabricaRobos {
    criarMontador() {
        return new EletronicaMontador();
    }

    criarInspetor() {
        return new EletronicaInspetor();
    }
}

// CLIENTE

function escolherMontagem(fabrica) {
    const roboMontador = fabrica.criarMontador();
    const roboInspetor = fabrica.criarInspetor();

    console.log(roboMontador.funcao());
    console.log(roboInspetor.funcao());
    console.log('-'.repeat(35))
}

// USO

escolherMontagem(new FabricaAutomotiva());
escolherMontagem(new FabricaEletronica());