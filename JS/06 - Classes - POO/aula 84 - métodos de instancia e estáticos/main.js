// A classe é um molde que cria novos objetos
function teste(){
    console.log('teste');
    console.log(this); // objeto global por estar fora da classe
}

class ControleRemoto{
    constructor(tv){
        // toda vez que a classe é instanciada, esse método construtor é chamado, por exemplo, se eu criar uma função por fora da classe e chamá-la aqui dentro, logo quando for instanciada a função será executada
        this.tv = tv;
        this.volume = 0;
        teste(); 
    }

    // métodos de instância
    aumentarVolume(){
        this.volume += 1;
        console.log(this.volume);
    }

    diminuirVolume(){
        this.volume -= 1;
    }

    // métodos estáticos -> 'uma função que está dentro de uma classe'
    static trocaPilha(){
        console.log(this); //referente a classe
    }
}

// tudo referente a classe controleRemoto
const controleUm = new ControleRemoto('LG'); // cria o objeto e chamou a função

// método de instância -> 'nome do objeto'.metodo
controleUm.aumentarVolume();

// controleUm.trocaPilha(); // Erro -> is not a function
ControleRemoto.trocaPilha(); //Acessando o método estático

console.log(controleUm)