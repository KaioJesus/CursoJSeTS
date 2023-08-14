let num1 = 10.25;
let num2 = 2.5
let num3 = 3;
let num4 = 10.561489641651;

let nan = num1 * "Olá"

console.log(num4.toFixed(1)); //deixa com a quantidade de casas deciamsi que desejar
console.log(typeof num1.toString()); // converte para string
console.log(Number.isInteger(num1)) //é inteiro? false
console.log(Number.isInteger(num3)) //é inteiro? true
console.log(Number.isNaN(nan)) //é not a number?  true