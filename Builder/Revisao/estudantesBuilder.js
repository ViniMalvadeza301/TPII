// PRODUTO

class Estudante {
    constructor() {
        this.nome = null;
        this.curso = null;
        this.endereco = null;
        this.email = null;
        this.celular = null;
        this.responsaveis = [];
    }

    mostrarDetalhes() {
        console.log(
            `
Nome: ${this.nome},
Curso: ${this.curso},
Endereço: ${this.endereco},
E-mail: ${this.email},
Celular: ${this.celular},`
)
this.responsaveis.forEach((responsavel, index) => {
    console.log(`Responsavel ${index + 1}: ${responsavel}`);
})
    }
}

// BUILDER

class BuilderEstudante {
    constructor() {
        this.estudante = new Estudante();
    }

    addNome(nome) {
        this.estudante.nome = nome;
        return this;
    }

    addCurso(curso) {
        this.estudante.curso = curso;
        return this;
    }

    addEndereco(endereco) {
        this.estudante.endereco = endereco;
        return this;
    }

    addEmail(email) {
        this.estudante.email = email;
        return this;
    }

    addCelular(celular) {
        this.estudante.celular = celular;
        return this;
    }

    addResponsaveis(primeiroResponsavel, segundoResponsavel) {
        this.estudante.responsaveis.push(primeiroResponsavel);

        if (segundoResponsavel) {
            this.estudante.responsaveis.push(segundoResponsavel);
        }

        return this;
    }

    build() {
        if (!this.estudante.nome) {
            throw new Error("Estudante sem nome!");
        }
        
        return this.estudante;
    }
}

// USO

const estudanteJoao = new BuilderEstudante()
.addNome("João Bolinha")
.addCurso("Engenharia de pesca")
.addEndereco("Rua Argelia Maria")
.addEmail("jogaobolinha@email.com")
.addCelular("11 999999999")
.addResponsaveis("José Bolinha", "Marta Bolinha")
.build();

estudanteJoao.mostrarDetalhes();