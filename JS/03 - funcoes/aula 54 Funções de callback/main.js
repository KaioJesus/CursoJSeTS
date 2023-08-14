//Funções de callback
//Funções de callback são funções que estão uma dentro da outra que você chama quando alguma coisa terminar de ocorrer

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback){
    setTimeout(() => {
        console.log('f1');
        if(callback) callback();
    }, rand());
}
function f2(callback){
    setTimeout(() => {
        console.log('f2');
        if(callback) callback();
    }, rand());
}
function f3(callback){
    setTimeout(() => {
        console.log('f3');
        if(callback) callback();
    }, rand());
}

// f1();
// f2();
// f3();
// console.log('Olá mundo!')

//Funções de callback caso queira ter uma ordem para que as funções sejam executadas
//Códigos abaixo significam a mesma coisa, o último é a melhor opção para não gerar o callbackhell

//Callback hell
f1(function () {
    f2(function () {
        f3(function () {
            console.log('olá mundo!')
        });
    });
});

// f1(() => f2(() => f3(() => console.log('Olá mundo!'))));

// f1(f1callback());

// function f1callback(){
//     f2(f2callback);
// }

// function f2callback(){
//     f3(f3callback);
// }

// function f3callback(){
//     console.log('olá mundo!')
// }

