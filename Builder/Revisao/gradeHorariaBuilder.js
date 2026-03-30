// PRODUTO

class GradeHoraria {
    constructor() {
        this.segunda = [];
        this.terca = [];
        this.quarta = [];
        this.quinta = [];
        this.sexta = [];
    }

    mostrarDetalhes() {
        const dias = ["segunda", "terca", "quarta", "quinta", "sexta"];

        dias.forEach(dia => {
            this[dia].forEach(aula => {
                console.log(
                    `${dia.toUpperCase()}: Disciplina: ${aula.disciplina} | Horario: ${aula.horario} | Sala: ${aula.sala}`
                );
            });
        });
    }
}

// BUILDER

class BuilderGradeHoraria {
    constructor() {
        this.gradeHoraria = new GradeHoraria();
    }

    addSegunda(disciplina, horario, sala) {
        this.gradeHoraria.segunda.push({disciplina, horario, sala});
        return this;
    }

    addTerca(disciplina, horario, sala) {
        this.gradeHoraria.terca.push({disciplina, horario, sala});
        return this;
    }

    addQuarta(disciplina, horario, sala) {
        this.gradeHoraria.quarta.push({disciplina, horario, sala});
        return this;
    }

    addQuinta(disciplina, horario, sala) {
        this.gradeHoraria.quinta.push({disciplina, horario, sala});
        return this;
    }

    addSexta(disciplina, horario, sala) {
        this.gradeHoraria.sexta.push({disciplina, horario, sala});
        return this;
    }

    build() {
        return this.gradeHoraria;
    }
}

// USO

const grade = new BuilderGradeHoraria()
.addSegunda("Matemática", "7:40", "1")
.addTerca("Português", "9:40", "2")
.addQuarta("Física", "7:40", "7")
.build()
.mostrarDetalhes();