// Método filter

const nomes = ['Lucas', 'Julia', 'Marlon', 'Gustavo'];
const notas = [5, 7.5, 8, 5.5];

const reprovados = nomes.filter((_, indice) => notas[indice] < 6);

console.log(`Reprovados: ${reprovados}`);

// O método filter retorna um booleano, ou seja, caso o resultado da checagem pre-definida for verdadeiro,
// salva esse valor na variavel onde foi criado o filter.