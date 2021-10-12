// Array como valor de chave em objetos

const cliente = {
    nome: 'Guto',
    idade: 70,
    filhos: 'Sim',
    email: 'guto@email.com',
    fones: ['978425681', '853694201']
}

cliente.fones.forEach(fone => console.log(fone));