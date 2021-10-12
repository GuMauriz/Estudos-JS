// A função montada em objeto é feita segundo a sua maneira primitiva de criação

const cliente = {
    nome: 'Guto',
    idade: 55,
    email: 'guto@email.com',
    fones: ['978425681', '853694201'],
    dependentes: [
        {
        nome: 'Guilherme',
        parentesco: 'filho',
        idade: 16
    },{
        nome: 'Mauro',
        parentesco: 'sobrinho',
        idade: 17
    }],
    saldo: 200,
    depositar: function(valor){
        this.saldo += valor
    },
    sacar: function(valor){
        this.saldo -= valor
    }
}

cliente.sacar(100);
console.log(cliente.saldo);
