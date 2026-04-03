// PROTOTYPE

class Forma {
    constructor(nome, lados) {
        this.nome = nome;
        this.lados = lados;
    }

    clone() {
        return new this.constructor(this.nome, this.lados);
    }

    mostrar() {
        console.log(
            `
Nome da Forma: ${this.nome}
Lados: ${this.lados}
            `
        )
    }
}

// SUBCLASSES

class FormaA extends Forma {
    constructor(lados) {
        super("FormaA", lados);
    }
}

class FormaB extends Forma {
    constructor(lados) {
        super("FormaB", lados);
    }
}

class FormaC extends Forma {
    constructor(lados) {
        super("FormaC", lados);
    }
}

// USO

const formaA = new FormaA(10);
formaA.mostrar();

const formaA1 = formaA.clone();
formaA1.lados = 20;
formaA1.mostrar();