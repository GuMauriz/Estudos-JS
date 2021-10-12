const cliente = {
    nome: 'Guto',
    idade: 55,
    email: 'guto@email.com',
    fones: ['978425681', '853694201'],
    dependentes: [{
        nome: 'Guilherme',
        parentesco: 'filho',
        idade: 16
    }]
}

cliente.dependentes.push({
    nome: 'Mauro',
    parentesco: 'sobrinho',
    idade: 17
})

console.log(cliente);

const dependenteMaisVelho = cliente.dependentes.filter(dependente => dependente.idade === 17);

console.log(`O dependente mais velho é ${dependenteMaisVelho[0].nome}, com ${dependenteMaisVelho[0].idade} anos.`)