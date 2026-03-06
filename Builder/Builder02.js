// DEFINIR AS PARTES DO PRODUTO

class Estilo {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

class Size {
  constructor(tamanho) {
    this.tamanho = tamanho;
  }
}

class Colour {
  constructor(cor) {
    this.cor = cor;
  }
}

class Price {
  constructor(preco) {
    this.preco = preco;
  }
}

// BUILDER

class RoupaBuilder {
  constructor() {
    this.estilo = null;
    this.size = null;
    this.colour = null;
    this.price = null;
  }

  addEstilo(tipo) {
    this.estilo = new Estilo(tipo);
    return this;
  }

  addSize(tamanho) {
    this.size = new Size(tamanho);
    return this;
  }

  addColour(cor) {
    this.colour = new Colour(cor);
    return this;
  }

  addPrice(preco) {
    this.price = new Price(preco);
    return this;
  }

  construir() {
    return new Roupa(this.estilo, this.size, this.colour, this.price);
  }
}

// CONSTRUIR PRODUTO

class Roupa {
  constructor(estilo, size, colour, price) {
    this.estilo = estilo;
    this.size = size;
    this.colour = colour;
    this.price = price;
  }

  mostrarDetalhes() {
    console.log(`
Especificações da roupa:

Estilo: ${this.estilo.tipo}
Tamanho: ${this.size.tamanho}
Cor: ${this.colour.cor}
Preço: ${this.price.preco}
`);
  }
}

// CLIENTE

const roupa1 = new RoupaBuilder()
  .addEstilo("Casual")
  .addSize("G")
  .addColour("Preto")
  .addPrice("R$ 70.00")
  .construir();

const roupa2 = new RoupaBuilder()
  .addEstilo("Esportivo")
  .addSize("M")
  .addColour("Branca")
  .addPrice("R$ 65.99")
  .construir();

roupa1.mostrarDetalhes();
roupa2.mostrarDetalhes();
