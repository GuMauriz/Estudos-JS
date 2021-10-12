// Objeto como valor de chave

const cliente = {
    nome: 'Guto',
    idade: 55,
    email: 'guto@email.com',
    fones: ['978425681', '853694201']
}

cliente.dependentes = {
    nomes: ['Mauro', 'Gui'],
    idades: [17, 16],
    dataNasc: ['10/05/04', '07/04/05']
}

console.log(cliente);

// Alterando valor de objeto em objeto

cliente.dependentes.nomes[1] = 'Guilherme';

console.log(cliente);