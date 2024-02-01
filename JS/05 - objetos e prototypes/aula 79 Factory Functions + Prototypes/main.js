// Factory functions -> Funções de fábrica

function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        fala: function(assunto){ //métodos são funçõees dentro de objetos
            return `${this.nome} está ${assunto}`; //o this se oferece ao objeto inteiro
        },
    };
}

const pessoa = criaPessoa('Kaio', 'Jesus');
console.log(pessoa);
console.log(pessoa.fala('falando sobre JS'));