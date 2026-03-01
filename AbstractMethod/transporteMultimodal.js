// PRODUTO ABSTRATO

class Veiculo {
    detalhes() {
        throw new Error("detalhes() deve ser implementado!");
    }
}

// PRODUTOS CONCRETOS - TERRESTRES

class Carro extends Veiculo {
    detalhes() {
        return "Transporte Terrestre: CARRO";
    }
}

class Onibus extends Veiculo {
    detalhes() {
        return "Transporte Terrestre: ÔNIBUS";
    }
}

// PRODUTOS CONCRETOS - AÉREOS

class Helicoptero extends Veiculo {
    detalhes() {
        return "Transporte Aéreo: HELICÓPTERO";
    }
}

class Aviao extends Veiculo {
    detalhes() {
        return "Transporte Aéreo: AVIÃO";
    }
}

// FÁBRICA ABSTRATA

class FabricaTransporte {
    criarVeiculo() {
        throw new Error("criarVeiculo() deve ser implementado!");
    }
}

// FÁBRICA CONCRETA - TERRESTRE

class FabricaTerrestre extends FabricaTransporte {
    criarVeiculo(tipo) {
        if (tipo === "carro") {
            return new Carro();
        }
        if (tipo === "onibus") {
            return new Onibus();
        }
        throw new Error("Tipo de veículo terrestre inválido");
    }
}

// FÁBRICA CONCRETA - AÉREA

class FabricaAerea extends FabricaTransporte {
    criarVeiculo(tipo) {
        if (tipo === "helicoptero") {
            return new Helicoptero();
        }
        if (tipo === "aviao") {
            return new Aviao();
        }
        throw new Error("Tipo de veículo aéreo inválido");
    }
}

// CLIENTE

function aplicativoMobilidade(fabrica, tipo) {
    const veiculo = fabrica.criarVeiculo(tipo);
    console.log(veiculo.detalhes());
}

// USO

console.log("Modalidade Terrestre:");
aplicativoMobilidade(new FabricaTerrestre(), "carro");
aplicativoMobilidade(new FabricaTerrestre(), "onibus");

console.log("\nModalidade Aérea:");
aplicativoMobilidade(new FabricaAerea(), "helicoptero");
aplicativoMobilidade(new FabricaAerea(), "aviao");