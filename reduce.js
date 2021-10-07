// Método reduce

const salaJS = [10, 9, 5, 7, 6.5, 8, 7];
const salaPython = [8, 10, 7, 6, 9];
const salaRuby = [7, 6, 8, 10];

function mediaGeral(notaDasSalas){
    const calculaNotasGerais = notaDasSalas.reduce((acum, atual) => atual + acum, 0);
    return calculaNotasGerais/notaDasSalas.length
}

console.log(`A média da sala de JavaScript é ${mediaGeral(salaJS)}.`);
console.log(`A média da sala de Python é ${mediaGeral(salaPython)}.`);
console.log(`A média da sala de Ruby é ${mediaGeral(salaRuby)}.`);