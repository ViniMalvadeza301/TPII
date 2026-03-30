// PRODUTOS ABSTRATOS (ABSTRAÇÃO)

class Menu {
    descricaoMenu() {
        throw new Error("deve ser implementado!");
    }
}

class Idioma {
    descricaoIdioma() {
        throw new Error("deve ser implementado!");
    }
}

class Layout {
    descricaoLayout() {
        throw new Error("deve ser implementado!");
    }
}

// PRODUTOS CONCRETOS

class MenuPersonalizado extends Menu {
    constructor(pais) {
        super();
        this.pais = pais;
    }
    descricaoMenu() {
        console.log(`Menu referente ao país ${this.pais}`);
    }
}

class IdiomaPersonalizado extends Idioma {
    constructor(idioma) {
        super();
        this.idioma = idioma;
    }

    descricaoIdioma() {
        console.log(`Idioma referente ao ${this.idioma}`);
    }
}

class LayoutPersonalizado extends Layout {
    constructor(continente) {
        super();
        this.continente = continente
    }
    descricaoLayout() {
        console.log(`Layout referente ao continente ${this.continente}`);
    }
}

// FABRICA ABSTRATA

class FabricaBanco {
    criarMenu(pais) {
        throw new Error("deve ser implementado!");
    }

    criarIdioma(idioma) {
        throw new Error("deve ser implementado!");
    }

    criarLayout(continente) {
        throw new Error("deve ser implementado!");
    }

    implementar(pais, idioma, continente) {
        const m = this.criarMenu(pais);
        const i = this.criarIdioma(idioma);
        const l = this.criarLayout(continente);
        m.descricaoMenu();
        i.descricaoIdioma();
        l.descricaoLayout();
    }
}

// FABRICA CONCRETA

class FabricaBancoPersonalizada extends FabricaBanco {
    criarMenu(pais) {
        return new MenuPersonalizado(pais);
    }

    criarIdioma(idioma) {
        return new IdiomaPersonalizado(idioma);
    }

    criarLayout(continente) {
        return new LayoutPersonalizado(continente);
    }
}

// USO

const brasil = new FabricaBancoPersonalizada();
brasil.implementar("Brasil", "Português", "América Latina");

const usa = new FabricaBancoPersonalizada();
usa.implementar("EUA", "English", "America");