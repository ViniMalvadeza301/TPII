class ProdutoEletronico {
    detalhes() {
        throw new Error('detalhes() deve ser implementado!');
    }
}

class ProdutoModa {
    detalhes() {
        throw new Error('detalhes() deve ser implementado!');
    }
}

class TelefoneTech extends ProdutoEletronico {
    detalhes() {
        return 'Telefone Tech: 256Gb, 5G, foco em desempenho.';
    }
}

class CamisaTech extends ProdutoModa {
    detalhes() {
        return 'Camisa Tech: dry-fit, estampa, foco em conforto.'
    }
}

class TelefoneFashion extends ProdutoEletronico {
    detalhes() {
        return 'Telefone Fashion: 128Gb, 4G, foco em beleza.';
    }
}

class CamisaFashion extends ProdutoModa {
    detalhes() {
        return 'Camisa Fashion: algodão, lisa, foco em beleza.'
    }
}

class FabricaProduto {
    criarEletronico() {
        throw new Error("criarEletronico() deve ser implementado!");
        
    }

    criarModa() {
        throw new Error("criarModa() deve ser implementado!");
        
    }
}

class FabricaEletronico extends FabricaProduto {
    criarEletronico() {
        return new TelefoneTech();
    }

    criarModa() {
        return new CamisaTech();
    }
}

class FabricaModa extends FabricaProduto {
    criarEletronico() {
        return new TelefoneFashion();
    }

    criarModa() {
        return new CamisaFashion();
    }
}

function lojaVirtual(fabrica) {
    const produtoEletronico = fabrica.criarEletronico();
    const produtoModa = fabrica.criarModa();

    console.log(produtoEletronico.detalhes());
    console.log(produtoModa.detalhes());
    console.log('-'.repeat(50));

}

lojaVirtual(new FabricaEletronico());
lojaVirtual(new FabricaModa());
