//metodo reduce
//mais utilizado para reduzir o array a um valor só
// recebe como argumento uma função e o valor inicial
// variavel.reduce(função, valorInicial)
// se nao for definido o valor inicial, o valor inicial será o primeiro elemento do array que já entra no acumulador

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

let total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    // console.log(acumulador, valor, indice);
    // para cada passagem no array, o acumulador recebe o valor do atual indice mais o valor do acumulador
    return acumulador;
}, 0);

// console.log(total);

//retorn os pares (filter)
const pares = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, [])

// console.log(pares);

//retorna o dobro (map)
const dobro = numeros.reduce((acumulador, valor)=>{
    acumulador.push(valor * 2)
    return acumulador;
}, [])

// console.log(dobro);

const pessoas = [
    {nome: 'Kaio', idade: 23},
    {nome: 'Carol', idade: 22},
    {nome: 'Kaua', idade: 14},
    {nome: 'Lorenzo', idade: 9},
    {nome: 'Lucca', idade: 15},
    {nome: 'Luiggi', idade: 11},
    {nome: 'Kevin', idade: 28}
];

// retorna o valor da idade da pesoa mais vleha
const maisVelha = pessoas.reduce((acumulador, valor) => {
    // console.log(acumulador, valor.idade)
    if(acumulador.idade > valor.idade){
        // console.log(acumulador)
        return acumulador;
    } 
    // console.log(valor)
    return valor;
    // passa aqui quando o acumulador não for maior que o valor
}, 0)

console.log(maisVelha);