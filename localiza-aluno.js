const alunos = ['Gui', 'Gustavo', 'Mauro', 'Guto'];
const mediaAlunos = [10, 6, 8, 7];

let listaAlunosEMedia = [alunos, mediaAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if(listaAlunosEMedia[0].includes(nomeDoAluno)){
        indice = listaAlunosEMedia[0].indexOf(nomeDoAluno)
        return listaAlunosEMedia[0][indice] + ', sua média é ' + listaAlunosEMedia[1][indice];
    }else{
        return 'Aluno não cadastrado.'
    }
}

console.log(exibeNomeNota('Mauro'));