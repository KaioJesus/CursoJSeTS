// Produto -> aumento, desconto
//Ecommerce ->  Camisa -> cor, Caneca -> material, moletom

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco); //herança, herdando as chaves do Produto
    this.cor = cor;
}
// prototype é um objeto vazio, vamos criar um objeto vazio para setar o prototype para o prototype do produto
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta; // volta a ser Camiseta o construtor

const produto = new Produto('Alura', 100);
const camiseta = new Camiseta('Regata', 100, 'preta');
console.log(produto);
console.log(camiseta);
// agora como peguei o prototype do produto, o construtor falar que é Produto

function Caneca(nome, preco, material,estoque){
    Produto.call(this, nome, preco); //herdando de produto
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // para ela aparecer
        configurable: false, // não pode apagar e nem sobrescrever
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return; // não faz nada, só não retorna nada se o valor não for um número
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype); // herdando os prototypes de Produto
Caneca.prototype.constructor = Caneca; //volta a ser Caneca o prototype após herdar o produto

const caneca = new Caneca('Flamengo', 25, 'Porcelana', 10);
console.log(caneca)