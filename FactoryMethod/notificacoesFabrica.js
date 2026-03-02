// PRODUTOS ABSTRATOS

class Notificacao {
    enviar(mensagem) {
        throw new Error("enviar(mensagem) deve ser implementado!");
        
    }
}

// PRODUTOS CONCRETOS

class EmailNotificacao extends Notificacao {
    enviar(mensagem) {
        return `Mensagem via e-mail: ${mensagem}`;
    }
}

class SMSNotificacao extends Notificacao {
    enviar(mensagem) {
        return `Mensagem via sms: ${mensagem}`;
    }
}

class PushNotificacao extends Notificacao {
    enviar(mensagem) {
        return `Mensagem via push: ${mensagem}`;
    }
}

// FABRICA ABSTRATA 

class FabricaNotificacao {
    criarNotificacao() {
        throw new Error("criarNotificacao() deve ser implementado!");
        
    }

    enviarNotificacao(mensagem) {
        const n = this.criarNotificacao();
        console.log(n.enviar(mensagem));
        console.log('-'.repeat(40));
    }
}

// FABRICA CONCRETA

class FabricaEmail extends FabricaNotificacao {
    criarNotificacao() {
        return new EmailNotificacao();
    }
}

class FabricaSMS extends FabricaNotificacao {
    criarNotificacao() {
        return new SMSNotificacao();
    }
}

class FabricaPush extends FabricaNotificacao {
    criarNotificacao() {
        return new PushNotificacao();
    }
}

// USO

const email = new FabricaEmail();
email.enviarNotificacao("Olá usúario 332132");

const sms = new FabricaSMS();
sms.enviarNotificacao("Olá usúario 34436435");

const push = new FabricaPush();
push.enviarNotificacao("Olá usúario 7553423");


