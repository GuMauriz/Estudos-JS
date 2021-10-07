// Map para alterar valores

const notas = [10, 6, 8, 9, 7];

let notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);

console.log(notasAtualizadas);

// Map para alterar strings

let nomes = ['augusto marcerli', 'RYAN torraso', 'mauro Gustavo'];

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);