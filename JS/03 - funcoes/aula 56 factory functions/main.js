// Factory functions -> Funções de fábrica

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift(); //excluir o primeiro elemento do array e retorna o valor para a variável
            console.log(valor);
            this.sobrenome = valor.join(' '); // unir
        },

        fala: function(assunto){ //métodos são funçõees dentro de objetos
            return `${this.nome} está ${assunto}`; //o this se oferece ao objeto inteiro
        },
        altura,
        peso,

        // Getter -> queremos obter o valor
        get imc(){ //imc agora age como se fosse um atributo da classe usando o get
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const pessoaUm = criaPessoa('Kaio', 'Jesus', 1.76, 73);
console.log(pessoaUm.nome);
console.log(pessoaUm.imc);
console.log(pessoaUm.fala('falando sobre JS'));
console.log(pessoaUm.nomeCompleto); //Quando usamos get, não chamamos com parênteses, pois a função 'finge' que é atributo
pessoaUm.nomeCompleto = 'Caroline da costa dos santos';
console.log(pessoaUm.nomeCompleto);