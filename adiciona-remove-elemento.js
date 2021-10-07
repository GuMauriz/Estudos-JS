// Para adicionar um elemento na lista

const notasAluno1 = [10, 8, 6];
notasAluno1.push(7);
console.log(notasAluno1);

let mediaAluno1 = (notasAluno1[0] + notasAluno1[1] + notasAluno1[2] + notasAluno1[3])/notasAluno1.length
console.log(`A média é ${mediaAluno1}`);

// Para remover um elemento da lista

const notasAluno2 = [10, 6, 8, 5, 10];
notasAluno2.pop()
console.log(notasAluno2);

let mediaAluno2 = (notasAluno2[0] + notasAluno2[1] + notasAluno2[2] + notasAluno2[3])/notasAluno2.length
console.log(`A média é ${mediaAluno2}`);