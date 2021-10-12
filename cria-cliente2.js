// Pegar o cliente generico

function cliente(nome, idade, cpf, email, fone, saldo){
    this.nome = nome
    this.idade = idade
    this.cpf = cpf
    this.email = email
    this.fone = fone
    this.saldo = saldo
    this.deposito = function(valor){
        this.saldo += valor
    }
    this.saque = function(valor){
        this.saldo -= valor
    }
}

// Trazer as informações do cliente generico com o cliente.call e adicionar as demais informaçoes 
// do cliente poupança

function clientePoupança(nome, idade, cpf, email, fone, saldo, saldoPoup){
    cliente.call(this, nome, idade, cpf, email, fone, saldo)
    this.saldoPoup = saldoPoup
}

// Definir as propriedades

const ryan = new clientePoupança('Ryan', 27, '78412003504', 'ryan@email.com', '6557412351', 100, 200);

// Adicionar funções depositoPoup e saquePoup APENAS no prototipo do clientePoupança

clientePoupança.prototype.depositoPoup = function(valor){
    this.saldoPoup += valor
}

clientePoupança.prototype.saquePoup = function(valor){
    this.saldoPoup -= valor
}

ryan.saquePoup(100);
ryan.deposito(100);
console.log(ryan);