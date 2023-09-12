//Método splice -> adicionar ou remover elementos em qualquer indice do array
const nomes = ['Kaio', 'Carol', 'Kevin', 'Kaua', 'Jaque'];
//nome.splice(indice, qtdElementosADeletar, addElem1, addElem2,)


const removidos = nomes.splice(3, 2);
//a partir do indice 3, deletar dois elementos
console.log(nomes, removidos);
//foi removido o elemento 3 e o 4

//para remover até o final do array
console.log(nomes.splice(0, Number.MAX_VALUE));
// nesse caso, como ja haviam sidos removidos os elementos 3 e 4, o array tinha 3 elementos, a partir do elemento 0 foi removido tudo

//simulando o método push
nomes.splice(nomes.length, 0, 'Kaio', 'Jesus', 'Carol', 'Kaua');
console.log(nomes);
//adicionando elementos ao final do array, método push adiciona somente um

//método unshift
nomes.splice(0, 0, 'Cleber', 'Lucca');
//adicionando elementos no inicio do array, unshift adiciona somente um
console.log(nomes);

//método pop
nomes.splice(-1, 1);
//-1 ultimo elemento, remove o ultimo elemento
console.log(nomes);

//método shif
nomes.splice(0, 1)
//remove o primeiro elemento
console.log(nomes);

nomes.splice(2, 1, 'Lorenzo', 'Melinda');
//no índice 2, deletar um elemento (ele próprio) e a partir dai adicionar dois elementos
console.log(nomes);


