//Arrays

let a = 'A';
let b = 'B';
let c = 'C';

 [a, b, c] = [b, c, a]; //reatribuindo valores das variaveis
 console.log(a,b,c);

 const num = [1, 2, 3];
 const [um, dois, tres] = num; //desestruturando o array num em variáveis
 console.log(um, dois, tres);

const nume = [100, 200, 300, 400, 500, 600, 700];
const [numUm, numDois, numTres, ...resto] = nume; //rest operator ->  ...rest -> pega o restante dos valores que não foram atribuiídos
console.log(resto);
console.log(numUm, numDois, numTres);

const [num1, , num3, , num5] = nume;
console.log(num1, num3, num5); // pulando numeros

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros[1][2]); // pegando o número 6

// outra maneira
const [ , [,,seis]] = numeros;
console.log(seis);

//atribuindo arrays dentro de uma array em uma variável
const [lista1, lista2, lista3] = numeros;
console.log(lista1);
console.log(lista2);
console.log(lista3);

console.log(lista3[2]); // acessando um índice de um array atribuido de uma desestruturação