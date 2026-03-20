import copy

class Pessoa:
    def __init__(self, id, nome, idade):
        self.id = id
        self.nome = nome
        self.idade = idade
    
    def __str__(self):
        return f"id: {self.id}, nome: {self.nome}, idade: {self.idade}"

    def clone(self):
        return copy.copy(self)


class GerenciaPessoa:
    def __init__(self):
        self.pessoas = {}

    # ordem corrigida (id primeiro)
    def addPessoa(self, id, nome, idade):
        pessoa = Pessoa(id, nome, idade)
        self.pessoas[id] = pessoa

    # retorna CLONE
    def getPessoa(self, id):
        if id in self.pessoas:
            return self.pessoas[id].clone()
        return None

    # retorna ORIGINAL (pra comparação)
    def getPessoaById(self, id):
        return self.pessoas.get(id, None)


# =====================

gerencia = GerenciaPessoa()

# Adicionando pessoas
gerencia.addPessoa(1, 'João da Silva', 30)
gerencia.addPessoa(2, 'Maria da Silva', 25)
gerencia.addPessoa(3, 'Pedro da Silva', 45)

# Clonando
pessoa1 = gerencia.getPessoa(1)
pessoa2 = gerencia.getPessoa(2)

# Modificando clones
pessoa1.idade = 18
pessoa1.nome = "GeraldoGaribaldo"

pessoa2.idade = 90

# =====================

print("PESSOAS ORIGINAIS:")
print(gerencia.getPessoaById(1))
print(gerencia.getPessoaById(2))
print(gerencia.getPessoaById(3))

print("\nCOPIAS MODIFICADAS:")
print(pessoa1)
print(pessoa2)

'''class Pessoa:
    def __init__(self, id, nome, idade):
        self.id = id
        self.nome = nome
        self.idade = idade

    # Método clone (Prototype)
    def clone(self):
        return Pessoa(self.id, self.nome, self.idade)

    def __str__(self):
        return f"Pessoa(id={self.id}, nome='{self.nome}', idade={self.idade})"


class GerenciaPessoa:
    def __init__(self):
        self.pessoas = []

    def addPessoa(self, id, nome, idade):
        pessoa = Pessoa(id, nome, idade)
        self.pessoas.append(pessoa)

    def getPessoaById(self, id):
        for pessoa in self.pessoas:
            if pessoa.id == id:
                return pessoa
        return None


# Criando instância
gerencia = GerenciaPessoa()

# Adicionando pessoas
gerencia.addPessoa(1, 'João da Silva', 30)
gerencia.addPessoa(2, 'Maria da Silva', 25)
gerencia.addPessoa(3, 'Pedro da Silva', 45)

# Clonando a primeira pessoa e modificando o nome
pessoa_original = gerencia.getPessoaById(1)

if pessoa_original:
    pessoa_clone = pessoa_original.clone()

    # modificando o clone
    pessoa_clone.nome = 'João Clonado'

    print("Original:", pessoa_original)
    print("Clone:", pessoa_clone)'''