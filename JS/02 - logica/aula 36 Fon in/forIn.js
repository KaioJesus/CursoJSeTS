//For in -> lê os índices ou chaves do objeto

const frutas = ['Pera', 'Maçã', 'Uva'];

//muito usado para objetos
for (let i in frutas){
    console.log(frutas[i]);
}

// Objetos são coisas do mundo real que podemos dar nome, atribuir ações
const pessoa = {
    nome: 'Kaio',
    sobrenome: 'Jesus',
    idade: 23
};

for (let chave in pessoa){
    console.log(chave); // lendo as chaves do objeto, uma por uma
    console.log(pessoa[chave]); // pegando o valor de cada chave
}

// acessando o valor do objeto
// console.log(pessoa.nome);
// console.log(pessoa['nome']); 