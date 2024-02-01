const array = [1, 2, 3];
array.push(4)
console.log(array);

//constantes não podem ser alteradas com reatribuição '=', mas usar métodos como push, pop, você consegue alterar um valor de um array por exemplo;

//Criando um objeto
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        //para criar uma função dentro de um objeto, não é preciso de usar a palavra 'function'
        console.log(`${this.nome} ${this.sobrenome} está falando oi ...`);
        //this representa este objeto
    }
};

pessoa.fala();

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);

//parâmetros da função 'nome', 'sobrenome', 'idade'
// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

//quando Há valores iguais, você não precisa repetir o valor no objeto, como 'nome: nome', você pode pôr somente nome, como mostrado abaixo.

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

//argumentos da função
const pessoa1 = criaPessoa('Kevin', 'Ramos', 29);
const pessoa2 = criaPessoa('Kaio', 'Jesus', 23);
const pessoa3 = criaPessoa('Carol', 'Costa', 22);

console.log(pessoa1.nome, pessoa2.nome);