//Parâmetros

function funcao(){
    //arguments é uma palavra chave do js que sustenta todos os argumentos enviados, ou seja, quando não é declarada um parâmetro, o arguments recebe tudo como um objeto;
    console.log(arguments); // ex [Arguments] [Arguments] {'0': 'Mundo!', '1': 1,  '2': 2, '3': 3, '4': 4,  '5': 5, '6': 6,  '7': 7,  '8': 8, '9': 9 } 

    //só funciona quando a função é declarada como 'function', não serve para arrow functions
}

funcao('Mundo!', 1,2,3,4,5,6,7,8,9,);

function somaArgumentos(){
    let total = 0;
    for(let argumento of arguments)
        total += argumento;

    console.log(total);
}

somaArgumentos(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) //somando os argumentos

function funcaoDois(a, b = 2, c = 4){ //posso declarar o valor dos parâmetros já aqui
    console.log(a + b + c);
}

funcaoDois(2, undefined, 20); //se eu definir um valor como undefined quando eu chamo a função, ela receberá o valor já declarado nos parâmetros;


// enviando um objeto literal como parâmetro
function funcaoTres({nome, sobrenome, idade}){
    console.log(nome,sobrenome,idade)
}
let obj = {nome: 'Kaio', sobrenome: 'Jesus', idade: 23};
funcaoTres(obj) 


//array
function funcaoQuatro([valor1, valor2, valor3]){ 
    console.log(valor1, valor2, valor3);
}

funcaoQuatro(['Kaio', 'Jesus', 23]);

const conta = function(operador, acumulador, ...numeros){ //'...' rest operator, receber todos os valores que não foram recebidos, o resto e ele precisa ser o último parâmetro, para receber o resto né
    for (let numero of numeros){
        // console.log(operador, acumulador, numeros)
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('*', 1, 20, 30, 40, 50);