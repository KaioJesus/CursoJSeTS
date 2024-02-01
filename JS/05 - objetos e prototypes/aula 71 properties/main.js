// defineProperty - defineProperties 
function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', { //recebe o objeto (this se refere ao objeto) e o nome da chave
        enumerable: true, //mostra a chave quando voce usa for in ou object.keys
        value: estoque, //valor definidado no objeto criado, pode ser qualquer valor, até uma função
        writable: true, //controla se o valor pode ou não ser alterado
        configurable: true // configurável, permite se o objeto pode ser editado, reconfigurado, deletado ou não, recebe true ou false
    });
    
    Object.defineProperties(this, {
        //varios objetos
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
console.log(p1);
console.log(Object.keys(p1)); //mostra as chaves do objeto;
for (let chave in p1){
    console.log(chave);
}