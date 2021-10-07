// conceito basico for

const numeros = [100, 200, 300, 400, 500, 600];

for(let i = 0; i < numeros.length; i++){
   console.log(i, numeros[i]);
}

// media com for

const notasAluno1 = [10, 6.5, 8, 7.5];

let somaDasNotasAluno1 = 0

for(let i =0; i < notasAluno1.length; i++){
    somaDasNotasAluno1 += notasAluno1[i];
}

console.log(somaDasNotasAluno1/notasAluno1.length);

// forEach

const notasAluno2 = [9, 8, 6, 10];

let somasDasNotasAluno2 = 0

notasAluno2.forEach(notasAluno2 => {
    somasDasNotasAluno2 += notasAluno2
})

console.log(somasDasNotasAluno2/notasAluno2.length);