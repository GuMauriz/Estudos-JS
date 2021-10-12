const clientes = [
    {
    nome: 'Mauro',
    idade: 35,
    dependentes: [{
        nome: 'Noemi',
        idade: 5,
        parentesco: 'filha'
    },
    {
        nome: 'Abigail',
        idade: 2,
        parentesco: 'filha'
    }],
},
{
    nome: 'Guto',
    idade: 55,
    dependentes: [{
        nome: 'Guilherme',
        idade: 16,
        parentesco: 'filho'
    }]
}]

const mostraDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(mostraDependentes);