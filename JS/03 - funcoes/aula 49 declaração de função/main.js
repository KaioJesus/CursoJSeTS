//declaração de função;


//Hoisting -> quando você chama a função antes da declaração dela;
FalaOi();

function FalaOi(){
    console.log('Oi');
}

//first-class objects (objetos de primeira classe)
//Function expression

const souUmDado = function (){
    console.log('Sou um dado.');
} // uma constante recebe uma função como dado

souUmDado(); //depois de receber uma função como um dado, a variável ou constante é executada como função

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo')
    funcao(); //recebendo um parametro como funcao
}

executaFuncao(souUmDado);

//Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function!');
}

//Dentro de um obj

const obj = {
    falar: function(){
        console.log('Estou falando ...');
    }
}

obj.falar(); 

//ou 

const obj2 = {
    falar(){
        console.log('Estou falando...')
    }

}
obj2.falar();