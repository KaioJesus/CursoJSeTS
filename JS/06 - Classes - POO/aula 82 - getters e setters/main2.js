class Pessoa {
    // recebe um método construtor, próprio para classe, quando é preciso receber parâmetros
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    
    get nomeCompleto(){
        console.log('Olá, você acessou o getter!')
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){
        console.log('Olá, eu sou o setter');
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const pessoa = new Pessoa('Kaio', 'Jesus');
pessoa.nomeCompleto = 'Kaio Jesus Ramos'
// console.log(pessoa.nomeCompleto); // acessando o atributo da classe, get
console.log(pessoa.nome)
console.log(pessoa.sobrenome); // acessando o atributo da classe, get