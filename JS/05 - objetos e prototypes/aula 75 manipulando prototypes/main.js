// New Object -> função construtora tem o object.prototype atrelada a ela

const objA = {
    chaveA: 'A'
    // [[prototype]]: object
}
const objB = {
    chaveB: 'B'
    // [prototype]: objA
}

const objC = new Object();
objC.chaveC = 'C';

// Acessando a chave do objA através do objB
// set prototype -> configura o prototype
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
// herdando a chave A do objA
console.log(objC.chaveB);
// herdando a chave B e a chave A do objeto B

// Object.getPrototypeOf -> pega o prototype


// Função construtora(nome, preco)
function Produto(nome, preco){
    this.nome = nome; 
    this.preco = preco;
}

// métodos são melhores em performance fora da função construtora
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const produtoUm = new Produto('Camisa', 50);
produtoUm.desconto(10) // dez porcento de desconto
console.log(produtoUm);
produtoUm.aumento(20) // 20 porcento de aumento
console.log(produtoUm);

const produtoDois = {
    nome: 'Caneca',
    preco: 15
}

console.log('')

// no momento produtoDois não tem o aumento e o desconto
Object.setPrototypeOf(produtoDois, Produto.prototype);
// produtoDois recebendo o prototype de Produto definido anteriormente

produtoDois.aumento(200);
console.log(produtoDois)

// criando um objeto literal
const produtoTres = Object.create(Produto.prototype, {
    preco: {
        writable:true,
        value: 43,
        configurable: true,
        enumerable: true,
    }
})
produtoTres.aumento(10);
console.log(produtoTres)