// Estudo sobre protótipos

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

const gustavo = new cliente('Gustavo',17,'68974235480','gustavo@email.com', '9563214874', 200);
const guto = new cliente('Guto', 55, '56321478945', 'guto@email.com', '5578412035', 350);

gustavo.deposito(100);
guto.saque(150);
console.log(gustavo);
console.log(guto);