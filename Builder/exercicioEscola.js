// admin, aluno, professor, visitante
// nome, func, matricula, h entrada e saida

// COMPONENTES DO PRODUTO

class Nome {
    constructor(name) {
        this.name = name;
    }
}

class Funcao {
    constructor(funcaoPessoa) {
        this.funcaoPessoa = funcaoPessoa;
    }
}

class Matricula {
    constructor(NumMatricula) {
        this.NumMatricula = NumMatricula;
    }
}

class HoraEntrada {
    constructor(horaEntrar) {
        this.horaEntrar = horaEntrar;
    }
}

class HoraSaida {
    constructor(horaSair) {
        this.horaSair = horaSair;
    }
}

// BUILDER

class PessoaBuilder {
    constructor() {
        this.nome = null;
        this.funcao = null;
        this.matricula = null;
        this.horaEntrada = null;
        this.horaSaida = null;
    }

    addNome(name) {
        this.nome = new Nome(name);
        return this;
    }

    addFuncao(funcaoPessoa) {
        this.funcao = new Funcao(funcaoPessoa);
        return this;
    }

    addMatricula(NumMatricula) {
        this.matricula = new Matricula(NumMatricula);
        return this;
    }

    addHoraEntrada(horaEntrar) {
        this.horaEntrada = new HoraEntrada(horaEntrar);
        return this;
        
    }
    addHoraSaida(horaSair) {
        this.horaSaida = new HoraSaida(horaSair);
        return this;
    }

    construir() {
        return new Pessoa(
            this.nome,
            this.funcao,
            this.matricula,
            this.horaEntrada,
            this.horaSaida
        );
    }
}

// CONSTRUIR PRODUTO

class Pessoa {
    constructor(nome, funcao, matricula, horaEntrada, horaSaida) {
        this.nome = nome;
        this.funcao = funcao;
        this.matricula = matricula;
        this.horaEntrada = horaEntrada;
        this.horaSaida = horaSaida;
    }

    mostrarDetalhes() {
        console.log(
            `Especificações da pessoa:

Nome: ${this.nome ? this.nome.name : null},
Função: ${this.funcao ? this.funcao.funcaoPessoa : null},
Matricula: ${this.matricula ? this.matricula.NumMatricula : null},
Hora Entrada: ${this.horaEntrada ? this.horaEntrada.horaEntrar : null},
Hora Saida: ${this.horaSaida ? this.horaSaida.horaSair : null}
`
        );
    }
}

// -------------------------------------------------------------------- //

// PESSOA ABSTRATA JÁ FEITA (PRODUTO ABSTRATO)

// PRODUTO CONCRETO

class Administrador extends Pessoa {
    constructor(nome, funcao, matricula, horaEntrada, horaSaida) {
        super(nome, funcao, matricula, horaEntrada, horaSaida);
    };

}

class Aluno extends Pessoa {
    constructor(nome, funcao, matricula, horaEntrada, horaSaida) {
        super(nome, funcao, matricula, horaEntrada, horaSaida);
    };
}

class Professor extends Pessoa {
    constructor(nome, funcao, matricula, horaEntrada, horaSaida) {
        super(nome, funcao, matricula, horaEntrada, horaSaida);
    };
}

class Visitante extends Pessoa {
    constructor(nome, funcao, matricula, horaEntrada, horaSaida) {
        super(nome, funcao, matricula, horaEntrada, horaSaida);
    };
}

// FABRICA ABSTRATA

class FabricaPessoa {
    criarPessoa() {
        throw new Error("criarPessoa() deve ser implementado!");
        
    }
}

// FABRICA CONCRETA

class FabricaAdministrador extends FabricaPessoa {
    criarPessoa(nome, funcao, matricula, horaEntrada, horaSaida) {
        return new Administrador(nome, funcao, matricula, horaEntrada, horaSaida);
    }
}

class FabricaAluno extends FabricaPessoa {
    criarPessoa(nome, funcao, matricula, horaEntrada, horaSaida) {
        return new Aluno(nome, funcao, matricula, horaEntrada, horaSaida);
    }
}

class FabricaProfessor extends FabricaPessoa {
    criarPessoa(nome, funcao, matricula, horaEntrada, horaSaida) {
        return new Professor(nome, funcao, matricula, horaEntrada, horaSaida);
    }
}

class FabricaVisitante extends FabricaPessoa {
    criarPessoa(nome, funcao, matricula, horaEntrada, horaSaida) {
        return new Visitante(nome, funcao, matricula, horaEntrada, horaSaida);
    }
}

// CLIENTE

const builder = new PessoaBuilder()
    .addNome("Carlos")
    .addFuncao("Administrador")
    .addMatricula("12345")
    .addHoraEntrada("08:00")
    .addHoraSaida("18:00");

const pessoaBase = builder.construir();

const fabrica = new FabricaAdministrador();

const admin = fabrica.criarPessoa(
    pessoaBase.nome,
    pessoaBase.funcao,
    pessoaBase.matricula,
    pessoaBase.horaEntrada,
    pessoaBase.horaSaida
);

admin.mostrarDetalhes();

const builder1 = new PessoaBuilder()
    .addNome("Vinícius")
    .addFuncao("Aluno")
    .addMatricula("12345")
    .addHoraEntrada("08:00")
    .addHoraSaida("18:00");

const pessoaBase1 = builder1.construir();

const fabrica1 = new FabricaAluno();

const aluno = fabrica.criarPessoa(
    pessoaBase1.nome,
    pessoaBase1.funcao,
    pessoaBase1.matricula,
    pessoaBase1.horaEntrada,
    pessoaBase1.horaSaida
);

aluno.mostrarDetalhes();

// IA 

// ======================================
// BASE PRODUCT
// ======================================

class Pessoa {

    constructor({ nome, funcao, matricula, horaEntrada, horaSaida }) {
        this.nome = nome;
        this.funcao = funcao;
        this.matricula = matricula;
        this.horaEntrada = horaEntrada;
        this.horaSaida = horaSaida;
    }

    mostrarDetalhes() {
        console.log(`
----------------------------
Nome: ${this.nome}
Função: ${this.funcao}
Matrícula: ${this.matricula}
Hora Entrada: ${this.horaEntrada}
Hora Saída: ${this.horaSaida}
----------------------------
`);
    }
}

// ======================================
// CONCRETE PRODUCTS
// ======================================

class Administrador extends Pessoa {}

class Aluno extends Pessoa {}

class Professor extends Pessoa {}

class Visitante extends Pessoa {}


// ======================================
// BUILDER
// ======================================

class PessoaBuilder {

    constructor() {
        this.data = {};
    }

    addNome(nome) {
        this.data.nome = nome;
        return this;
    }

    addFuncao(funcao) {
        this.data.funcao = funcao;
        return this;
    }

    addMatricula(matricula) {
        this.data.matricula = matricula;
        return this;
    }

    addHoraEntrada(horaEntrada) {
        this.data.horaEntrada = horaEntrada;
        return this;
    }

    addHoraSaida(horaSaida) {
        this.data.horaSaida = horaSaida;
        return this;
    }

    build() {
        return this.data;
    }
}


// ======================================
// ABSTRACT FACTORY
// ======================================

class FabricaPessoa {

    static criarPessoa(tipo, dados) {

        switch (tipo.toLowerCase()) {

            case "admin":
            case "administrador":
                return new Administrador(dados);

            case "aluno":
                return new Aluno(dados);

            case "professor":
                return new Professor(dados);

            case "visitante":
                return new Visitante(dados);

            default:
                throw new Error("Tipo de pessoa inválido!");
        }
    }

}


// ======================================
// USAGE EXAMPLE
// ======================================

// Criando dados com Builder
const dadosPessoa = new PessoaBuilder()
    .addNome("Carlos Silva")
    .addFuncao("Administrador")
    .addMatricula("ADM001")
    .addHoraEntrada("08:00")
    .addHoraSaida("18:00")
    .build();


// Criando pessoa usando Factory
const pessoa = FabricaPessoa.criarPessoa("admin", dadosPessoa);


// Mostrar dados
pessoa.mostrarDetalhes();
