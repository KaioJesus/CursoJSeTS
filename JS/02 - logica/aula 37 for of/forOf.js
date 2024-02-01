
//for classico -> Geralmente com iteráveis (arrays e string)
//For in -> Retorna índice ou chave (arrays, strings, objetos)
//For of -> Retorna o valor em si (arrays ou strings), os objetos não são iterados

const nome = ['Kaio Jesus', 'Caroline Costa', 'Kevin Jesus'];


//Mesma maneira de dizer a mesma coisa
for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('');

for (let valor of nome){
    console.log(valor);
}

console.log('');

nome.forEach(function(element, index, arr){ //valor, indice e array completo
    console.log(element, index, arr);
})

console.log('');

nome.forEach((element, index, arr) => { //usando arrow function
    console.log(element, index, arr);
})