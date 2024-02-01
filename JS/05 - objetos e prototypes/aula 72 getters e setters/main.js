// defineProperty - Getter e setters -> uma maneira de proteger a propriedade, getter -> obtem o valor, setter -> settar, configurar
function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', { 
        enumerable: true, 
        // value: estoque, //get vai pegar o valor e o set 'setar'
        // writable: true, //se eu tenho um metodo que trabalha meu valor, o writable não é preciso, //*
        configurable: true,
        get: function(){
            return estoquePrivado; // get -> pega e exibe o valor
        },

        set: function(valor){ //configura o valor
            // esse valor que é passado como parâmetro é o valor recebido como atribuição
            if(typeof valor !== 'number'){
                throw new TypeError('Não é um número')
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
console.log(p1)
console.log(p1.estoque)

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    }
}

const produtoUm = criaProduto('Camiseta');
produtoUm.nome = 'qualquer coisa';
console.log(produtoUm.nome);
