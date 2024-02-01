

const produto = {nome: 'Produto', preco: 1.8};
const outraCoisa = produto;

// produto.nome = 'Caneca';
// altera ambos, apontam para o mesmo lugar
console.log(produto, outraCoisa);

// altera ambos, apontam para o mesmo lugar
outraCoisa.preco = 2.5;
console.log(produto, outraCoisa);

const outraCoisaDois = {...produto, material: 'porcelana'}; //copiando o valor, não altera em ambos
console.log(outraCoisaDois, produto);

// outras formas de copiar

const caneca = Object.assign({}, produto, {descricao: '...'}); //copiando tudo de produto para caneca
console.log(caneca)

const garrafa = {nome: produto.nome, preco: produto.preco}; //pega o valor da chave dos objetos

// Object.keys => mostra as chaves do objeto
console.log(Object.keys(produto));

// Object.Freeze -> congela o objeto, não pode alterar mais nada
// Object.freeze(produto);
// produto.nome = 'Caroline'; não foi alterado
// console.log(produto);

// object.entries -> Um array com a chave e o valor do produto
console.log(Object.entries(produto));
for (let entry of Object.entries(produto)){
    console.log(entry); // retorna o array de cada chave do objeto, ex, ['nome', 'produto'], ['preco', 2.5]
}

// Object.values => mostra os valores das chaves do objeto
console.log(Object.values(produto));

// Object.getOwnPropertyDescriptor => mostra as propriedades writable, enumerable, configurable (ver defineProperty), recebe o objeto e a chave que você deseja ver
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

Object.defineProperty(produto, 'nome', {
    writable: false, // permite se o valor da chave é alterado ou não
    configurable: false
})

produto.nome = 'Kevin'
delete produto.nome; // configurable false, não permite deletar a chave;
delete produto.preco; // configurable true
console.log(produto); //como writable está false, o valor de nome não será alterado
