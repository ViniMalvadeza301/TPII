// DEFINE AS PARTES DE UM CARRO

class Motor {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

class Carroceria {
  constructor(estilo) {
    this.estilo = estilo;
  }
}

class Rodas {
  constructor(aro) {
    this.aro = aro;
  }
}

class Interior {
  constructor(cor) {
    this.cor = cor;
  }
}

// BUILDER

class CarroBuilder {
  constructor() {
    this.motor = null;
    this.carroceria = null;
    this.rodas = null;
    this.interior = null;
  }

  addMotor(tipo) {
    this.motor = new Motor(tipo);
    return this;
  }

  addCarroceria(estilo) {
    this.carroceria = new Carroceria(estilo);
    return this;
  }

  addRodas(aro) {
    this.rodas = new Rodas(aro);
    return this;
  }

  addInterior(cor) {
    this.interior = new Interior(cor);
    return this;
  }

  construir() {
    return new Carro(this.motor, this.carroceria, this.rodas, this.interior);
  }
}

// CONSTRUIR CARRO

class Carro {
  constructor(motor, carroceria, rodas, interior) {
    this.motor = motor;
    this.carroceria = carroceria;
    this.rodas = rodas;
    this.interior = interior;
  }

  mostrarDetalhes() {
    console.log(`
Especificações do carro:

Motor: ${this.motor.tipo}
Carroceria: ${this.carroceria.estilo}
Roda: ${this.rodas.aro}
Interior: ${this.interior.cor}
`);
  }
}

// CLIENTE

const carro1 = new CarroBuilder()
  .addMotor("1.4")
  .addCarroceria("Esportivo")
  .addRodas("18")
  .addInterior("Preto")
  .construir();

const carro2 = new CarroBuilder()
  .addMotor("1.0")
  .addCarroceria("Pickup")
  .addRodas("15")
  .addInterior("Rosa")
  .construir();

carro1.mostrarDetalhes();
carro2.mostrarDetalhes();
