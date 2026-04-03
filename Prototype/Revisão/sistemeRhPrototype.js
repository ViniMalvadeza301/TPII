// PROTOTYPE

class Perfil {
    constructor(nome, cargo, departamento, nivelHierarquico) {
        this.nome = nome;
        this.cargo = cargo;
        this.departamento = departamento;
        this.nivelHierarquico = nivelHierarquico;
    }

    clone() {
        return new this.constructor(this.nome, this.cargo, this.departamento, this.nivelHierarquico);
    }

    mostrar() {
        console.log(
            `
Nome: ${this.nome}
Cargo: ${this.cargo}
Departamento: ${this.departamento}
Nivel Hierárquico: ${this.nivelHierarquico}
            `
        )
    }
}

// USO

const prototipoLogistica = new Perfil("Nome", "Auxiliar de Logística", "Logística", "1");

prototipoLogistica.mostrar();

const funcionarioLogistica1 = prototipoLogistica.clone();
funcionarioLogistica1.nome = "João da Silva";

funcionarioLogistica1.mostrar();

const funcionarioLogistica2 = prototipoLogistica.clone();
funcionarioLogistica2.nome = "Carlos Alberto da Mota";

funcionarioLogistica2.mostrar();