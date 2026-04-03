// PROTOTYPE

class Documento {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    clone() {
        return new this.constructor(this.nome, this.tipo);
    }

    mostrar() {
        console.log(`Nome: ${this.nome}, Tipo: ${this.tipo}`);
    }
}

// SUBCLASSES

class Contrato extends Documento {
    constructor(nome) {
        super(nome, "contrato");
    }
}

class Cartas extends Documento {
    constructor(nome) {
        super(nome, "cartas");
    }
}

class Relatorio extends Documento {
    constructor(nome) {
        super(nome, "relatorio");
    }
}

// USO

const contrato = new Contrato("Contrato de trabalho");

const contrato1 = contrato.clone();
contrato1.nome = "Contrato de estágio";

const cartas = new Cartas("Carta original");

const cartas1 = cartas.clone();
cartas1.nome = "Carta cópia";

contrato.mostrar();
contrato1.mostrar();

cartas.mostrar();
cartas1.mostrar();