const pessoa = {
    nome: 'Kaio',
    sobrenome: 'Jesus',
    idade: 23
};

console.log(pessoa);

// duas formas de acessar o objeto
console.log(pessoa['nome']);
console.log(pessoa.nome);

// com a notação de colchete, posso usar valor dinâmico
const chave = 'nome';
console.log(pessoa[chave]);
// console.log(pessoa.chave); isso aqui da undefined, não funciona como a notação accima

// objeto como construtor

const pessoaUm = new Object();
pessoaUm.nome = 'Kaio';
pessoaUm.sobrenome = 'Ramos';
pessoaUm.idade = 23;
console.log(pessoaUm);

pessoaUm.falarNome = function() {
    console.log(`${this.nome} está falando!`); //metodos são funções que estão dentro do objeto que executam funções
} //this se refere ao objeto

pessoaUm.falarNome();

pessoaUm.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
} // não usar arrow function em objetos por conta do this

console.log(pessoaUm.getDataNascimento());

// delete pessoaUm.nome;
// console.log(pessoaUm);

for (let chave in pessoaUm){
    console.log(chave, pessoaUm[chave]); // vendo as chaves do objeto e os valores dela
}

// factory functions

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

// const p2 = criaPessoa('Kaio', 'Jesus');
// console.log(p2, p2.nome, p2.sobrenome, p2.nomeCompleto());

//constructor sobrenome
function Pessoa(nome, sobrenome){ //começa com letra maiuscula
    this.nome = nome;
    this.sobrenome = sobrenome;
}

//new cria um objeto vazio {} e atrela a palavra this ao objeto e também retorna esse this
// {} <- this -> return this

//this varia de acordo bom o objeto, porque serão vários criados, então por exemplo, se eu to criando a pessoaQuatro, o this se referirá a pessoaQuatro e assim por diante.

const p3 = new Pessoa('Kaio', 'Jessus');
const p4 = new Pessoa('Caroline', 'Costa');
const p5 = new Pessoa('Kauã', 'Jesus');
const p6 = new Pessoa('Kevin', 'Jesus');
console.log(p3, p4, p5, p6);

p6.nome = 'Jaqueline';
console.log(p6)
