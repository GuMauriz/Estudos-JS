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

let relatorio = '';

for (let info in cliente){
    if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function'){
        continue
    }else{
        relatorio += `
        ${info} -> ${cliente[info]}
        `
    }
}

console.log(relatorio);