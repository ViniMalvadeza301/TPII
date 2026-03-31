//título, ícones, atalhos e submenu.

// PRODUTO

class Menu {
    constructor() {
        this.titulo = null;
        this.icones = [];
        this.atalhos = [];
        this.submenu = null;
    }

    mostrarDetalhes() {
        console.log(`Título: ${this.titulo},`);
        
        this.icones.forEach(icone => {
            console.log(`Icone: ${icone},`);
        });
        
        this.atalhos.forEach(atalho => {
            console.log(`Atalho: ${atalho},`);
        });

        if (this.submenu) { 
            console.log("Submenu:");
            this.submenu.mostrarDetalhes();
        }
        
    }
}

// BUILDER

class BuilderMenu {
    constructor() {
        this.menu = new Menu();
    }

    addTitulo(titulo) {
        this.menu.titulo = titulo;
        return this;
    }

    addIcone(icone) {
        this.menu.icones.push(icone);
        return this;
    }

    addAtalho(atalho) {
        this.menu.atalhos.push(atalho);
        return this;
    }

    addSubMenu(submenu) {
        this.menu.submenu = submenu;
        return this;
    }

    build() {
        if (!this.menu.titulo) {
            throw new Error("O menu precisa de titulo!");
        }

        return this.menu;
    }
}

// USO

const submenu = new BuilderMenu()
    .addTitulo("Submenu")
    .addAtalho("Ctrl + Z")
    .build();

const menu1 = new BuilderMenu()
.addTitulo("Menu1")
.addIcone("Bomba")
.addIcone("Bomba2")
.addAtalho("Ctrl + C")
.addAtalho("Ctrl + V")
.addSubMenu(submenu)
.build();

menu1.mostrarDetalhes();