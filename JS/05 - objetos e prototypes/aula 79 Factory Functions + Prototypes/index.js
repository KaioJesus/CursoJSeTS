// Composições

const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

// pessoaPrototype está recebendo os métodos comer, beber, falar, os objetos estão sendo copiados para ele.
// const pessoaPrototype = Object.assign({}, falar, comer, beber);
// outra forma de copiar
const pessoaPrototype = {...falar, ...comer, ...beber};


function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    // object.create -> cria um novo objeto, utilizando um outro objeto existente como prototyoe para o novo objeto a ser criado.
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.');
console.log(p2);
