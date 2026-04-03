// PROTOTYPE

class Pizza {
    constructor(nomePizza, ingredientes, tamanho) {
        this.nomePizza = nomePizza;
        this.ingredientes = ingredientes;
        this.tamanho = tamanho;
    }

    clone() {
        return new Pizza(this.nomePizza, this.ingredientes, this.tamanho);
    }

    mostrar() {
        console.log(
            `
Nome da pizza: ${this.nomePizza},
Ingredientes: ${this.ingredientes},
Tamanho: ${this.tamanho}
            `
        )
    }
}

// USO

const prototipoPizza = new Pizza("Calabresa", "massa, molho de tomate, queijo mussarela, linguiça calabresa, cebola, orégano e azeitonas", "grande");

const pizzaFrango = prototipoPizza.clone();
pizzaFrango.nomePizza = "Pizza de Frango";
pizzaFrango.ingredientes = "massa (farinha, água, óleo, fermento), molho de tomate, frango cozido e desfiado (geralmente refogado com cebola/alho), queijo muçarela e, essencialmente, requeijão cremoso"

prototipoPizza.mostrar();
pizzaFrango.mostrar();