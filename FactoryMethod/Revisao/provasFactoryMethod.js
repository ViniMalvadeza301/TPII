// PRODUTO ABSTRATO (ABSTRAÇÃO)

class Prova {
    tipo() {};
}

// PRODUTO CONCRETO

class Objetiva extends Prova {
    tipo() {
        console.log("Tipo de prova: Objetiva.");
    }
}

class Dissertativa extends Prova {
    tipo() {
        console.log("Tipo de prova: Dissertativa.");
    }
}

class Pratica extends Prova {
    tipo() {
        console.log("Tipo de prova: Prática.");
    }
}

// FABRICA ABSTRATA

class FabricaProva {
    criarProva() {
        return new Prova();
    }

    implementar() {
        const p = this.criarProva();
        p.tipo();
    }
}

// FABRICA CONCRETA

class FabricaObjetiva extends FabricaProva {
    criarProva() {
        return new Objetiva();
    }
}

class FabricaDissertativa extends FabricaProva {
    criarProva() {
        return new Dissertativa();
    }
}

class FabricaPratica extends FabricaProva {
    criarProva() {
        return new Pratica();
    }
}

// USO

const dissertativa = new FabricaDissertativa();
dissertativa.criarProva();
dissertativa.implementar();

const objetiva = new FabricaObjetiva();
objetiva.criarProva();
objetiva.implementar();

const pratica = new FabricaPratica();
pratica.criarProva();
pratica.implementar();