// PROTOTYPE

class Aula {
    constructor(nomeAula, horarioAula) {
        this.nomeAula = nomeAula;
        this.horarioAula = horarioAula;
    }

    clone() {
        return new this.constructor(this.nomeAula, this.horarioAula);
    }

    mostrar() {
        console.log(
            `
Aula: ${this.nomeAula}
Horário: ${this.horarioAula}
            `
        );
    }
}

// USO

const aulaPrototipo = new Aula("aula", "00:00");
aulaPrototipo.mostrar();

const aulaPortugues = aulaPrototipo.clone();
aulaPortugues.nomeAula = "Português";
aulaPortugues.horarioAula = "7:40 às 11:20";

aulaPortugues.mostrar();

const aulaMatematica = aulaPrototipo.clone();
aulaMatematica.nomeAula = "Matemática";
aulaMatematica.horarioAula = "11:30 às 13:00";

aulaMatematica.mostrar();