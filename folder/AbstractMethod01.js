// PRODUTOS ABSTRATOS

class GatewayPagamento {
    autorizar(valor) {
        throw new Error('Autorizar() deve ser implementado!');
    }
}

class Recibo {
    gerar(valor) {
        throw new Error('Gerar() deve ser implementado');
    }
}

// PRODUTOS CONCRETO - PayPal

class GatewayPayPal extends GatewayPagamento {
    autorizar(valor) {
        return `PayPal: Pagamento R$ ${valor.toFixed(2)} autorizado!`;
    }
}

class ReciboPayPal extends Recibo {
    gerar(valor) {
        return `PayPal: Recibo gerado de R$ ${valor.toFixed(2)}`;
    }
}

// PRODUTO CONCRETO - MERCADOPAGO

class GatewayMercadoPago extends GatewayPagamento {
    autorizar(valor) {
        return `Mercado pago: Pagamento R$ ${valor.toFixed(2)} autorizado!`;
    }
}

class ReciboMercadoPago extends Recibo {
    gerar(valor) {
        return `Mercado pago: Recibo gerado de R$ ${valor.toFixed(2)}`;
    }
}

// FABRICA ABSTRATA

    class FabricaPagamento {
        criarGateway() {
            throw new Error('criarGateway() deve ser implementado!');
        }

        criarRecibo() {
            throw new Error('criarRecibo() deve ser implementado!');
        }
    }

// FABRICA CONCRETA - PayPal

class FabricaPayPal extends FabricaPagamento {
    criarGateway() {
        return new GatewayPayPal();
    }

    criarRecibo() {
        return new ReciboPayPal();
    }
}

// FABRICA CONCRETA - MERCADOPAGO

class FabricaMercadoPago extends FabricaPagamento {
    criarGateway() {
        return new GatewayMercadoPago();
    }

    criarRecibo() {
        return new ReciboMercadoPago();
    }
}

// CLIENTE

function finalizarCompra(Fabrica, valor) {
    const gateway = Fabrica.criarGateway();
    const recibo = Fabrica.criarRecibo();

    console.log(gateway.autorizar(valor));
    console.log(recibo.gerar(valor));
}

// USO
const linha = '-';

finalizarCompra(new FabricaPayPal(), 200.89);
console.log(linha.repeat(50));

finalizarCompra(new FabricaMercadoPago(), 200.89);
console.log(linha.repeat(50));
