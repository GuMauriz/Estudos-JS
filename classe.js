// Criando a classe cliente

class Cliente {
    constructor(nome, sobrenome, cpf, email, fone, idade, saldo){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email= email
        this.fone = fone
        this.idade = idade
        this.saldo = saldo
    }

    deposito(valor){
        this.saldo += valor
    }

    saque(valor){
        this.saldo -= valor
    }
}

const gustavo = new Cliente('Gustavo', 'Mauriz', '56874123541', 'gustavo@email.com', '55748964123', 17, 150);

gustavo.deposito(200);
gustavo.saque(150);
console.log(gustavo);

// Herdando atributos e metodos da classe Cliente

class ClientePoupança extends Cliente {
    constructor(nome, sobrenome, cpf, email, fone, idade, saldo, saldoPoup){
        super(nome, sobrenome, cpf, email, fone, idade, saldo)
        this.saldoPoup = saldoPoup
    }

    depositoPoup(valor){
        this.saldoPoup += valor
    }

    saquePoup(valor){
        this.saldoPoup -= valor
    }
}

const mauro = new ClientePoupança('Mauro', 'Maurio', '78942364580', 'mauro@email.com', '968745201', 35, 30, 75);

mauro.depositoPoup(50);
mauro.deposito(50);
console.log(mauro);
