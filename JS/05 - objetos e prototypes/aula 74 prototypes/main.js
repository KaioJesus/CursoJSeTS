// Construtora -> molde (classe)
// Gera novos objetos

// Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

// Todos os objetos tem uma referência interna para um protótipo (prototype) que vem
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome;
};

// instanciação -> quando um objeto é gerado pela função construtora
// instancia
const pessoaUm = new Pessoa('Kaio', 'J.');
const pessoaDois = new Pessoa('Caroline', 'C.');
const data = new Date()

console.dir(pessoaUm);
console.dir(data);