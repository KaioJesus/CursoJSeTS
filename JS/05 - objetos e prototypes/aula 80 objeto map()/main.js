// Objeto map

const pessoas = [
    {id: 3, nome: 'Kaio', idade: 23},
    {id: 2, nome: 'Carol', idade: 22},
    {id: 1, nome: 'Kevin', idade: 28},
]

// const novasPessoas = {};
// for (const pessoa of pessoas){
//     const { id } = pessoa;
//     // desestruturação -> aula 33
//     novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const { id } = pessoa;
    // desestruturação -> aula 33
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas.get(2)); //get pega a chave que contém esse id atribuido anteriormente

for (const pessoa of novasPessoas){ // pegando objeto completo
    console.log(pessoa);
}
for (const [identifier, {id, nome}] of novasPessoas){ 
    console.log(identifier, id, nome);
}

novasPessoas.delete(2);
console.log(novasPessoas);