// Método map
// altera os valores e retorna um array do mesmo tamanho modificando o array original
// recebe uma função de callback
// para não modificar o array original, crie um novo array para passar esses valores modificados

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro);

const pessoas = [
    {nome: 'Kaio', idade: 23},
    {nome: 'Carol', idade: 22},
    {nome: 'Kaua', idade: 14},
    {nome: 'Lorenzo', idade: 9},
    {nome: 'Lucca', idade: 15},
    {nome: 'Luiggi', idade: 11}
]

//pegar o valor das chaves nome
const nomes = pessoas.map(obj =>  obj.nome);
console.log(nomes);

//retorna a chave idade e a idade
const idades = pessoas.map((obj) => ({idade:obj.idade}));
    // delete obj.nome; 
    // return obj ou
    // return {idade: obj.idade};
    
console.log(idades);

const comIds = pessoas.map( (obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice;
    // adicionando uma nova chave ao objeto
    //nesse caso com o indice do array 
    return newObj;
})
console.log(comIds);
console.log(pessoas);
