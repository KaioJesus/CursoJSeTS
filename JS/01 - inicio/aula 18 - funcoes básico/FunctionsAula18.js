//formas de criar funções

//Padrão
function soma (x, y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(3,5));

//função anônima
const raiz = function (n) {
    return n ** 0,5;
}

console.log(raiz(9));

//Arrow function
// const exp = (numero) => {
//     return numero ** 2;
// }

//Quando há um parâmetro pode excluir os parênteses.
const exp = numero => numero ** 2;

console.log(exp(4));