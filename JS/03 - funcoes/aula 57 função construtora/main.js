/// Funções construtura - retorna objetos
// funcoes de fabrica -> objetos
//Funções constrututoras inicia com letra maiuscula

function Pessoa(nome, sobrenome){
    //O corpo dessa função já vai ser o objeto que vai ser criado, o Js já faz isso na função construtora

    //atributos privados, disponíveis apenas dentro da função, quando não há this
    const Id = 123456;
    const metodoInterno = () => {} 

    //atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    }
}

const pessoaUm = new Pessoa('Kaio', 'Jesus');
pessoaUm.metodo();