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

function ofereceSeguro(obj){
    let propriedadesClientes = Object.keys(obj);
    if(propriedadesClientes.includes('dependentes')){
        console.log(`Oferta de seguro para ${cliente.nome}.`)
    }
}

// ofereceSeguro(cliente);

console.log(Object.keys(cliente)); // Para listar as chaves
console.log(Object.values(cliente)); // Para listar os valores das chaves
console.log(Object.entries(cliente)); // Para listar as chaves e seus valores