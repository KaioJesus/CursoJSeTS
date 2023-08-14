function maiorValor(x, y){
    return x > y ? x : y;
}

console.log(maiorValor(10, 3));

const maiorValorDois = (a, b) =>  a > b ? a : b; // quando tem uma linha só não precisa das chaves e também não é necessário o return

console.log(maiorValorDois(10, 50));