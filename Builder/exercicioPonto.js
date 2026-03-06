// ===== PARTES DO PRODUTO - COMPONENTES DA PESSOA =====
class Nome {
  constructor(name) {
    this.name = name;
  }
}
class Funcao {
  constructor(func) {
    this.func = func;
  }
}
class Matricula {
  constructor(matricu) {
    this.matricu = matricu;
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

// ===== PRODUTO FINAL =====
class Pessoa {
  constructor(nome, funcao, matricula, horaEntrada, horaSaida) {
    this.nome = nome;
    this.funcao = funcao;
    this.matricula = matricula;
    this.horaEntrada = horaEntrada;
    this.horaSaida = horaSaida;
  }

  mostrarDetalhes() {
    console.log(`Nome: ${this.nome.name},
Função: ${this.funcao.func},
Matricula: ${this.matricula ? this.matricula.matricu : null},
Hora entrada: ${this.horaEntrada.horaEntrar},
Hora saida: ${this.horaSaida.horaSair}
`);
  }
}

// ===== BUILDER =====
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
  addFuncao(func) {
    this.funcao = new Funcao(func);
    return this;
  }
  addMatricula(matricu) {
    this.matricula = new Matricula(matricu);
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
      this.horaSaida,
    );
  }
}

// ===== FACTORY METHOD =====
class PessoaFactory {
  static criarPessoa(tipo) {
    const builder = new PessoaBuilder();

    switch (tipo) {
      case "Administrador":
        return builder
          .addFuncao("Administrador")
          .addHoraEntrada("08:00")
          .addHoraSaida("17:00");
      case "Aluno":
        return builder
          .addFuncao("Aluno")
          .addHoraEntrada("07:00")
          .addHoraSaida("12:00");
      case "Professor":
        return builder
          .addFuncao("Professor")
          .addHoraEntrada("08:00")
          .addHoraSaida("16:00");
      case "Publico":
        return builder
          .addFuncao("Visitante")
          .addHoraEntrada("09:00")
          .addHoraSaida("14:00");
      default:
        throw new Error("Tipo de pessoa desconhecido");
    }
  }
}

// ===== CLIENTE =====
// Factory cria o builder já configurado para cada tipo
const admin = PessoaFactory.criarPessoa("Administrador")
  .addNome("João Silva")
  .addMatricula("A123")
  .construir();

const aluno = PessoaFactory.criarPessoa("Aluno")
  .addNome("Maria Santos")
  .addMatricula("B456")
  .construir();

const professor = PessoaFactory.criarPessoa("Professor")
  .addNome("Carlos Pereira")
  .addMatricula("P789")
  .construir();

const publico = PessoaFactory.criarPessoa("Publico")
  .addNome("Paulin das Gaivota")
  .construir();

admin.mostrarDetalhes();
aluno.mostrarDetalhes();
professor.mostrarDetalhes();
publico.mostrarDetalhes();
