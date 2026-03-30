// PRODUTO ABSTRATO (ABSTRAÇÃO)

class UI {
    interface() {};
}

// PRODUTO CONCRETO

class WindowsUI extends UI {
    interface() {
        console.log("Interface Windows.");
    }
}

class MacUI extends UI {
    interface() {
        console.log("Interface Mac.");
    }
}

class LinuxUI extends UI {
    interface() {
        console.log("Interface Linux.");
    }
}

// FABRICA ABSTRATA

class FabricaUI {
    criarUI() {
        return new UI();
    }

    implementar() {
        const ui = this.criarUI();
        ui.interface();
    }
}

// FABRICA CONCRETA

class FabricaWindowsUI extends FabricaUI {
    criarUI() {
        return new WindowsUI();
    }
}

class FabricaMacUI extends FabricaUI {
    criarUI() {
        return new MacUI();
    }
}

class FabricaLinuxUI extends FabricaUI {
    criarUI() {
        return new LinuxUI();
    }
}

// USO

const windowsUi = new FabricaWindowsUI();
windowsUi.criarUI();
windowsUi.implementar();

const macUi = new FabricaMacUI();
macUi.criarUI();
macUi.implementar();

const linuxUi = new FabricaLinuxUI();
linuxUi.criarUI();
linuxUi.implementar();