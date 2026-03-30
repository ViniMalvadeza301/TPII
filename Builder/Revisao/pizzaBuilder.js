// PRODUTO

class Pizza {
    constructor() {
        this.sabor = null;
        this.ingredientes = null;
    }

        mostrarDetalhes() {
        console.log(
`Pizza sabor: ${this.sabor},
utilizando ingredientes: ${this.ingredientes}`);
    }
}

// BUILDER

class PizzaBuilder{
    constructor() {
        this.pizza = new Pizza();
    }

    addSabor(sabor) {
        this.pizza.sabor = sabor;
        return this;
    }

    addIngredientes(ingredientes) {
        this.pizza.ingredientes = ingredientes;
        return this;
    }

    build() {
        return this.pizza;
    }

}

// USO

const pizza1 = new PizzaBuilder()
.addSabor("Moda da casa")
.addIngredientes("Cebola, tomate, carne, ovo")
.build()
.mostrarDetalhes();
