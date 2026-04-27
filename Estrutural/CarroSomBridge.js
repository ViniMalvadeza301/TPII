class Musica {
  tocar() {
    throw new Error("Implementar!");
  }
}

class Rock extends Musica {
  tocar() {
    console.log("Tocando Rock!");
  }
}

class Pop extends Musica {
  tocar() {
    console.log("Tocando Pop!");
  }
}

//

class Carro {
  constructor(musica) {
    this.musica = musica;
  }

  tocarMusica() {
    throw new Error("Implementar!");
  }
}

class CarroBasico extends Carro {
  tocarMusica() {
    console.log(`Carro Básico`);
    this.musica.tocar();
  }
}

class CarroEsportivo extends Carro {
  tocarMusica() {
    console.log(`Carro Esportivo`);
    this.musica.tocar();
  }
}

// USO

const musica1 = new Rock();

const carro1 = new CarroBasico(musica1);
carro1.tocarMusica();
