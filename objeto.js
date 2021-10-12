// Um objeto é formado por um par 'chave' / 'valor'.
// Ex: chave = nome, valor = Gustavo

const cliente = {
    nome: 'Gustavo',
    idade: 17,
    cpf: '2387541050',
    email: 'email@teste.com' 
}

// Acessar informações com notação de ponto

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);
console.log(`Os tres primeiros dígitos do meu CPF são: ${cliente.cpf.substring(0, 3)}`);
console.log(`Meu email para contato é: ${cliente.email}`);

// Acessar informações com notação de colchete

const chaves = ['nome', 'idade', 'cpf', 'email'];

console.log(`Minha idade é ${cliente[chaves[1]]}.`);