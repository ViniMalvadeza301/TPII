class Pessoa {
    constructor(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    // Método Prototype (clone)
    clone() {
        return new Pessoa(this.id, this.nome, this.idade);
    }
}

class GerenciaPessoa {
    constructor() {
        this.pessoas = [];
    }

    addPessoa(id, nome, idade) {
        const pessoa = new Pessoa(id, nome, idade);
        this.pessoas.push(pessoa);
    }

    getPessoaById(id) {
        const pessoa = this.pessoas.find(p => p.id === id);
        return pessoa || null;
    }
}

// Criando uma instancia de GerenciaPessoa
const gerencia = new GerenciaPessoa();

// Adicionando pessoas
gerencia.addPessoa(1, 'João da Silva', 30);
gerencia.addPessoa(2, 'Maria da Silva', 25);
gerencia.addPessoa(3, 'Pedro da Silva', 45);

// 🔥 Clonando a primeira pessoa e modificando o nome
const pessoaOriginal = gerencia.getPessoaById(1);

if (pessoaOriginal) {
    const pessoaClone = pessoaOriginal.clone();

    // modificando o clone
    pessoaClone.nome = 'João Clonado';

    console.log('Original:', pessoaOriginal);
    console.log('Clone:', pessoaClone);
}
