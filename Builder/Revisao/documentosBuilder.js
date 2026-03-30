// PRODUTO

class Documento {
    constructor() {
        this.capa = null;
        this.sumario = null;
        this.conteudo = null;
        this.graficos = null;
    }

    mostrarDetalhes() {
        console.log(
            `Capa: ${this.capa},
Sumario: ${this.sumario},
Conteudo: ${this.conteudo},
Graficos: ${this.graficos}
             `
        )
    }
}

// BUILDER

class DocumentoBuilder {
    constructor() {
        this.documento = new Documento();
    }

    addCapa(capa) {
        this.documento.capa = capa;
        return this;
    }

    addSumario(sumario) {
        this.documento.sumario = sumario;
        return this;
    }

    addConteudo(conteudo) {
        this.documento.conteudo = conteudo;
        return this;
    }

    addGraficos(graficos) {
        this.documento.graficos = graficos;
        return this;
    }

    build() {
        return this.documento;
    }

}

// USO

const documento1 = new DocumentoBuilder()
.addCapa("Hello World")
.addSumario("Padrões de projeto")
.addConteudo("lorem")
.addGraficos("Não")
.build()
.mostrarDetalhes();

