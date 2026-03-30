// PRODUTO ABSTRATO (ABSTRAÇÃO)

class Motor {
    descricaoMotor() {
        throw new Error("deve ser implementado!");
        
    }
}

class Roda {
    descricaoRoda() {
        throw new Error("deve ser implementado!");
        
    }
}

class Freio {
    descricaoFreio() {
        throw new Error("deve ser implementado!");
        
    }
}

// PRODUTO CONCRETO

class EsportivoMotor extends Motor {
    constructor(motor) {
        super();
        this.motor = motor;
    }

    descricaoMotor() {
        console.log(`Motor esportivo: ${this.motor}`);
    }
}

class EsportivoRoda extends Roda {
    constructor(roda) {
        super();
        this.roda = roda;
    }

    descricaoRoda() {
        console.log(`Roda esportiva: ${this.roda}`);
    }
}

class EsportivoFreio extends Freio {
    constructor(freio) {
        super();
        this.freio = freio;
    }
    
    descricaoFreio() {
        console.log(`Freio esportivo: ${this.freio}`);
    }
}

//

class PopularMotor extends Motor {
    constructor(motor) {
        super();
        this.motor = motor;
    }

    descricaoMotor() {
        console.log(`Motor Popular: ${this.motor}`);
    }
}

class PopularRoda extends Roda {
    constructor(roda) {
        super();
        this.roda = roda;
    }

    descricaoRoda() {
        console.log(`Roda popular: ${this.roda}`);
    }
}

class PopularFreio extends Freio {
    constructor(freio) {
        super();
        this.freio = freio;
    }
    
    descricaoFreio() {
        console.log(`Freio popular: ${this.freio}`);
    }
}

// FABRICA ABSTRATA

class FabricaVeiculo {
    criarMotor(motor) {
        throw new Error("deve ser implementado!");
        
    }

    criarRoda(roda) {
        throw new Error("deve ser implementado!");
        
    }

    criarFreio(freio) {
        throw new Error("deve ser implementado!");
        
    }

    implementar(motor, roda, freio) {
        const m = this.criarMotor(motor);
        const r = this.criarRoda(roda);
        const f = this.criarFreio(freio);
        m.descricaoMotor();
        r.descricaoRoda();
        f.descricaoFreio();
        console.log();
    }
}

// FABRICA CONCRETA

class FabricaEsportivo extends FabricaVeiculo {
    criarMotor(motor) {
        return new EsportivoMotor(motor);
    }

    criarRoda(roda) {
        return new EsportivoRoda(roda);
    }

    criarFreio(freio) {
        return new EsportivoFreio(freio);
    }
}

class FabricaPopular extends FabricaVeiculo {
    criarMotor(motor) {
        return new PopularMotor(motor);
    }

    criarRoda(roda) {
        return new PopularRoda(roda);
    }

    criarFreio(freio) {
        return new PopularFreio(freio);
    }
}

// USO

const esportivoMercedes = new FabricaEsportivo();
esportivoMercedes.implementar("V12","22","esportivo");

const popularMercedes = new FabricaPopular();
popularMercedes.implementar("V8", "20", "popular");