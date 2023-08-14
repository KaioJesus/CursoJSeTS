//return
//Retorna um valor
//Termian a função

function soma(a, b){
    return a + b; //retorna o valor
}

console.log(soma(3, 6));

function somaDois(a, b){
    console.log(a + b); //só exibe na tela
}

somaDois(7, 9);

function criaPessoa(nome, sobrenome){
    return {nome, sobrenome} //retornando objetos}
    //return {nome: nome, sobrenome: sobrenome}
}

//mesmas maneiras de declarar um objeto
const p1 = criaPessoa('Kaio', 'Jesus');
const p2 = {
    nome: 'Caroline',
    sobrenome: 'Costa'
};

console.log(p1);
console.log(p2);

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('Mundo'));

const fala = falaFrase('Olá');
const resto = fala('Mundo!');
console.log(resto);

//ex

function criaMultiplicador(multiplicador){
    //multiplicador
    function multiplicacao(n){
        return n*multiplicador;
    }
    return multiplicacao;

    // ou

    // return function(n){
    //     return n* multiplicador;
    // }
}

const duplica = criaMultiplicador(2); //recebendo o multiplicador como parãmetro da primeira função
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
const quintuplica = criaMultiplicador(5);

console.log(duplica(3)); // recebendo n como parâmetro da segunda função
console.log(triplica(4));
console.log(quadriplica(5));
console.log(quintuplica(6));