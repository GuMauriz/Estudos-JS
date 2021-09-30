// Arrow function simples
// Parâmetro em primeiro lugar, após o sinal de igual
// Não há necessidade da utilização de chaves
// Não há necessidade da utilização do return

const apresentar = nome => `Meu nome é ${nome}.`

console.log(apresentar("Gustavo"));

// Arrow function com mais de 1 linha de instrução e mais de um parâmetro
// Os parametros precisam estar entre parenteses
// Há necessidade da utilização de chaves
// Há necessidade da utilização do return

const bebidaGratis = (nome, idade) => {
   if (idade >= 18){
       return `Olá ${nome}, aqui está sua cerveja!`
   }else{
       return `Olá ${nome}, aqui está seu suco!`
   }
}

console.log(bebidaGratis("Gustavo", 20));