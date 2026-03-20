// Criar Singleton

class GerenciadorAlunos {
    constructor() {
        if (GerenciadorAlunos.instance) {
            return GerenciadorAlunos.instance;
        }
    
        this.alunos = [];
        GerenciadorAlunos.instance = this;
    }
        adicionarAluno(aluno) {
            this.alunos.push(aluno);
        }

        listarAlunos() {
            console.log("LISTA DE ALUNOS:");
            this.alunos.forEach((index, aluno) => {
                console.log(
                    `
                    Valor: ${index + 1},
                    Nome: ${aluno.nome},
                    Idade: ${aluno.idade},
                    Curso: ${aluno.curso},
                    Período: ${aluno.periodo}
                    `
                )
            });
        }
    
}

// Prototype

class Aluno {
    constructor(nome, idade, curso, periodo) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.periodo = periodo;        
    }

    clone() {
        return new Aluno(this.nome, this.idade, this.curso, this.periodo);
    }

}

// 1. Validar Singleton
const siga1 = new GerenciadorAlunos();
const siga2 = new GerenciadorAlunos();

console.log("Singleton funciona?", siga1 === siga2); // true

// 2. Criar um protótipo de aluno
const alunoPrototipo = new Aluno(
  null,
  null,
  "Análise e Desenvolvimento de Sistemas",
  "Noturno"
);

// 3. Criar clones e personalizar
const aluno1 = alunoPrototipo.clone();
aluno1.nome = "João";
aluno1.idade = 20;
console.log(aluno1);

const aluno2 = alunoPrototipo.clone();
aluno2.nome = "Maria";
aluno2.idade = 22;
console.log(aluno2);

// 4. Adicionar ao Gerenciador Singleton
siga1.adicionarAluno(aluno1);
siga1.adicionarAluno(aluno2);

// 5. Listar alunos
siga1.listarAlunos();

// 6. Verificar que o protótipo não foi alterado
console.log("\nProtótipo original:");
console.log(alunoPrototipo);