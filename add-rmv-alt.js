// Adicionar elemento

const cliente = {
    nome: 'Gustavo',
    idade: 17,
    fone: '984562157',
    email: 'email@teste.com',
    comunicacao: 'boa'
}

console.log(cliente);

cliente.cpf = '86524785210'

console.log(cliente);

// Alterar elemento

cliente.fone = '9785462318'

console.log(cliente);

// Remover elemento

delete cliente.comunicacao

console.log(cliente);