const a1 = [10, 20, 30, 40, 50];

// for(let valor of a1){
//     console.log(valor);
// }

// formas de iteração

a1.forEach((valor, indice, array) => {
    console.log(valor, indice, array);
})

a1.forEach(n => console.log(n));
let total = 0;

// usando foreach para somar tudo, o que pode ser feito com o reduce
a1.forEach(valor => total += valor)
console.log(total);