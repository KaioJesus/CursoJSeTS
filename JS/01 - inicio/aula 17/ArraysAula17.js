const alunos = ['Kaio', 'Carol', 'Kauã', 'Kevin', 'Cleber', 'Jaque'];

console.log(alunos[0]); // Kaio
console.log(alunos[1]); // Carol
console.log(alunos.length); // 6

//delete alunos[0];
alunos.unshift('Jesus'); //adiciona como primero elemento
console.log(alunos);

alunos.shift(); //remove o primeiro elemento
console.log(alunos);

alunos.push('Ramos'); //adiciona como ultimo elemento
console.log(alunos);

alunos.pop(); // remove o ultimo elemento
console.log(alunos);

console.log(alunos.slice(0, 2)); //não inclui o último do índice listado, nesse caso o indice 2 é o Kauã, mas só vai até o índice1
console.log(alunos.slice(2, 4));
console.log(alunos.slice(0, -2)); //negativo começa de tras para frente

console.log(typeof alunos); //objeto
console.log(alunos instanceof Array); // true

const numbers = 1234;
console.log(numbers instanceof Array); //false