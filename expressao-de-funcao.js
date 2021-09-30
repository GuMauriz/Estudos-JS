// Declarando função

console.log(apresentar());

function apresentar(){
    return "Olá!"
}

// Expressão de função, primeiro a const e depois o console.log

const soma1 = function(num1, num2) {return num1 + num2};

console.log(soma1(2, 3));

// Caso contrário, teriamos um erro de referencia, pois "soma" não foi definido

console.log(soma2(2,3));

const soma2 = function(num1, num2){return num1+num2};

// A principal diferença entre um tipo e outro chama-se HOISTING
// O JS "lista" primeiro todas as funções e var