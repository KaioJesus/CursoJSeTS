const velocidade = Symbol('velocidade'); // propriedade privada

class Carro {
    constructor(nome){
        this.nome = nome;
        this[velocidade] = 0; //atributo privado definido no symbol
    }

    set velocidade(valor) { // configura a velocidade
        console.log('setter');
        if(typeof valor !== 'number') return;
        if(valor >= 300 || valor <= 0) return;
        
        this[velocidade] = valor
    }

    get velocidade(){ // pega a velocidade
        console.log('getter'); // só para mostrar que tá acessando
        return this[velocidade];
    }

    acelerar(){
        if(this.velocidade >= 300) return;
        this[velocidade]++;
    }

    freiar(){
        if(this[velocidade] <= 0) return;
        this[velocidade]--;
    }
}

const lamborghini = new Carro('Aventador');
// for (let i = 0; i <= 400; i++){
//     lamborghini.acelerar();
//     // console.log(lamborghini.acelerar())
// }

lamborghini.velocidade = 200; // acessando o setter
console.log(lamborghini.velocidade); // ascessando o get da classe

