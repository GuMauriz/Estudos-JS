const altura = 7;
const largura = 2;
let forma = "triangulo"
let resultado;

if(forma === "quadrado"){
    resultado = altura * largura
}else{
    resultado = (altura * largura) / 2
}

console.log(resultado)