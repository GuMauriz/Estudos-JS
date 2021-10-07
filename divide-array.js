const nomes = ['Carlos', 'Maria', 'Joao', 'Claudio', 'Lucas', 'Ana Clara', 'Julia', 'Judith', 'Ryan',
'Augusto', 'Pedro', 'Marina', 'Isabela', 'Caitlyn', 'Gustavo', 'Marlon', 'Gabriela', 'Leandro', 'Noemi',
'Abigail', 'Juca', 'Cintia'];

console.log("Alunos novos:", nomes.length);

let sala1 = nomes.slice(0, nomes.length/2);
let sala2 = nomes.slice(nomes.length/2);

console.log(`Os alunos da sala 1 são: ${sala1}`);
console.log(`Os alunos da sala 2 são: ${sala2}`);