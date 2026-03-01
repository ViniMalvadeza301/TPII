// PRODUTOS ABSTRATOS

class Botao {
    renderButton() {
        throw new Error("render() deve ser implementado!");
        
    }
}

class Janela {
    renderWindow() {
        throw new Error("render() deve ser implementado");
        
    }
}

// PRODUTO CONCRETO - WINDOWS

class BotaoWindows extends Botao {
    renderButton() {
        return `Botão no estilo Windows`;
    }
}

class JanelaWindows extends Janela {
    renderWindow() {
        return `Janela no estilo Windows`;
    }
}

// PRODUTO CONCRETO - MAC

class BotaoMac extends Botao {
    renderButton() {
        return `Botão no estilo Mac`;
    }
}

class JanelaMac extends Janela {
    renderWindow() {
        return `Janela no estilo Mac`;
    }
}

// PRODUTO CONCRETO - LINUX

class BotaoLinux extends Botao {
    renderButton() {
        return `Botão no estilo Linux`;
    }
}

class JanelaLinux extends Janela {
    renderWindow() {
        return `Janela no estilo Linux`;
    }
}

// FABRICA ABSTRATA

class FabricaGui { // graphical user interface
    criarBotao() {
        throw new Error("criarBotao() deve ser implementado!");
        
    }

    criarJanela() {
        throw new Error("criarJanela() deve ser implementado!");
        
    }
} 

// FABRICA CONCRETA - WINDOWS

class FabricaWindows extends FabricaGui {
    criarBotao() {
        return new BotaoWindows();
    }

    criarJanela() {
        return new JanelaWindows();
    }
}

// FABRICA CONCRETA - MAC

class FabricaMac extends FabricaGui {
    criarBotao() {
        return new BotaoMac();
    }

    criarJanela() {
        return new JanelaMac();
    }
}

// FABRICA CONCRETA - LINUX

class FabricaLinux extends FabricaGui {
    criarBotao() {
        return new BotaoLinux();
    }

    criarJanela() {
        return new JanelaLinux();
    }
}

// CLIENTE

function escolherInterface(fabrica) {
    const botao = fabrica.criarBotao();
    const janela = fabrica.criarJanela();

    console.log(botao.renderButton());
    console.log(janela.renderWindow());
    console.log("-".repeat(25));
}

// USO

escolherInterface(new FabricaWindows());
escolherInterface(new FabricaMac());
escolherInterface(new FabricaLinux());