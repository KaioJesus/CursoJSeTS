// Classes -> faz o mesmo com a função construtora

class Pessoa {
    // recebe um método construtor, próprio para classe, quando é preciso receber parâmetros
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    
    falar(){
        console.log(`${this.nome} está falando`)
    }
}
// diferenças na sintaxe somente

function PessoaDois(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.falar = function(){
    console.log(`${this.nome} está falando`)
}

// instanciar -> criar um objeto a partir da classe
const pessoa = new Pessoa('Kaio', 'Jesus');
const pessoaDois = new PessoaDois('Kaio', 'Jesus');
console.log(pessoa, pessoaDois);