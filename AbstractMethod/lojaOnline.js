// PRODUTOS ABSTRATOS

class CartaoCredito {
    pagar(valor) {
        throw new Error("pagar() deve ser implementado!");
    }
}

class Boleto {
    pagar(valor) {
        throw new Error("pagar() deve ser implementado!");
    }
}


// PRODUTOS CONCRETOS - BANCO A

class CartaoCreditoBancoA extends CartaoCredito {
    pagar(valor) {
        console.log(`Banco A - Cartão: R$ ${valor}`);
    }
}

class BoletoBancoA extends Boleto {
    pagar(valor) {
        console.log(`Banco A - Boleto: R$ ${valor}`);
    }
}


// PRODUTOS CONCRETOS - BANCO B

class CartaoCreditoBancoB extends CartaoCredito {
    pagar(valor) {
        console.log(`Banco B - Cartão: R$ ${valor}`);
    }
}

class BoletoBancoB extends Boleto {
    pagar(valor) {
        console.log(`Banco B - Boleto: R$ ${valor}`);
    }
}


// FABRICA ABSTRATA

class FabricaPagamento {
    criarCartao() {
        throw new Error("criarCartao() deve ser implementado!");
    }

    criarBoleto() {
        throw new Error("criarBoleto() deve ser implementado!");
    }
}


// FABRICA CONCRETA - BANCO A

class FabricaBancoA extends FabricaPagamento {
    criarCartao() {
        return new CartaoCreditoBancoA();
    }

    criarBoleto() {
        return new BoletoBancoA();
    }
}


// FABRICA CONCRETA - BANCO B

class FabricaBancoB extends FabricaPagamento {
    criarCartao() {
        return new CartaoCreditoBancoB();
    }

    criarBoleto() {
        return new BoletoBancoB();
    }
}


// CLIENTE

function pagar(fabrica, valor) {
    const cartao = fabrica.criarCartao();
    const boleto = fabrica.criarBoleto();

    cartao.pagar(valor);
    boleto.pagar(valor);
}


// USO

pagar(new FabricaBancoA(), 250.99);
pagar(new FabricaBancoB(), 500.58);