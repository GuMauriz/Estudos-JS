const chamada = ['Joao', 'Ana', 'Carlos', 'Juca', 'Maria', 'Clara']

// Ana e Carlos saíram da sala, mas Rodrigo entrou.

// chamada.splice(1, 2, 'Rodrigo');


// Ninguém saiu da sala, mas Mauro e Gustavo entraram.

chamada.splice(2, 0, 'Mauro');
chamada.splice(2, 0, 'Gustavo');

console.log(chamada);