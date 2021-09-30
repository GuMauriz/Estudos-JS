// parametros

function conta(formula){
    return formula;
}

function soma(num1, num2){
    return num1 + num2;
}

function subtração(num1, num2){
    return num1 - num2;
}

console.log(soma(9, 7));
console.log(subtração(500, -400));
console.log(conta(3*15));

// é muito importante manter a ordem dos parâmetros

function apresentação(nome, idade){
    return `Meu nome é ${nome} e tenho ${idade} anos.`
}

console.log(apresentação("Gustavo", 17));

function multiplicação(num1 = 1, num2 = 2){
    return num1*num2;
}

console.log(multiplicação(soma(4, 5), subtração(10, 5)));
