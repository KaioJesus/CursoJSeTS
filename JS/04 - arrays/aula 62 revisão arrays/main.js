//Array são valores por referência;

const nomes = ['Eduardo', 'Kaio', 'Joana', 'Carol', 'Kevin'];

nomes[2] = 'João';

// delete nomes[2]; //empty item
console.log(nomes); 

//Funciona para string, objetos, funções, numeros
// Array como método construdor
// const nomes = new Array('Kaio', 'Carol', 'Jesus');

const novo = nomes;
console.log(novo);

novo.pop(); // mais utilizado que o shift

console.log(nomes, novo); //mesma cosia

const novosDois = [...nomes]; //rest operator, nesse caso se eu utilizar métodos como pop, push, o array original não será modificado

novosDois.push('Kaua'); // adiciona um elemento ao array como último índice, mais utilizado que o unshift

console.log(novosDois, nomes); // o array original permaneceu do jeito que tava, se eu utilizasse a atribuição normal, seria modificado, como o exemplo mais acima

novo.shift(); //removo o primeiro índice do array
console.log(novo);
novo.unshift('Kevin'); //adiciona como primeiro índice do array
console.log(novo);

const metodoSlice = [1, 2, 3, 4, 5, 6]; // Começa a contar a partir do elemento citado, nesse caso o 0 e vai até o anterior ao citado, nesse caso o 2;
console.log(metodoSlice.slice(0, -1)); // exclui os extremos, 0 primeiro índice, -1 último, é mais intuitivo utilizar o final do array como número negativo, pois o último número é -1, penúltimo -2, assim por diante

//converter string no array
const conversao = 'Kaio Jesus Ramos';
const arr = conversao.split(' '); //dividiu uma string para array, por conta do espaco
console.log(arr); //virou array
const arr2 = arr.join(' '); //junta as strings através de um parâmetro dado, nesse caso o espaço
console.log(arr2);
