//Objetos

const pessoa = {
    nome: 'Kaio',
    sobrenome: 'Jesus',
    idade: 23,
    endereco: {
        rua: 'Rua Capitão Pires',
        numero: 147
    }
};

console.log(pessoa); // pegando todos os dados
const name = pessoa.nome; //pegando só o nome e jogando em uma variável
// console.log(name);

//atribuição via desestruturação
const {nome, sobrenome, idade} = pessoa; //desestruturando através do nome dos atributos do objeto
console.log(nome, sobrenome, idade);

const {habilidade} = pessoa;
console.log(habilidade); //se o atributo não existir, o resultado será trazido como undefined, você pode atribuir um valor direto nessa constante

const {profissao = 'Não existe'} = pessoa;
console.log(profissao);

//criando nome para variável 
const {nome: nomePessoa, sobrenome:sobrenomePessoa} = pessoa; //primeiro o atributo e dps a variável
console.log(nomePessoa, sobrenomePessoa);

const {endereco: {rua, numero}} = pessoa; //Extraindo dados de um objeto dentro de um objeto
console.log(rua, numero);

const {...resto} = pessoa;
console.log(resto);