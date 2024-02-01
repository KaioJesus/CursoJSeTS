class Dispositivo{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) {
            console.log(this.nome + ' já está ligado');
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) {
            console.log(this.nome + ' já está desligado');
            return;
        }

        this.ligado = false
    }
}

// const dispositivoUm = new Dispositivo('Celular');
// dispositivoUm.ligar();
// dispositivoUm.desligar();
// console.log(dispositivoUm);

// herdando tudo da classe Dispositivo
class Smartphone extends Dispositivo{ // pega todos os atributos e métodos
    constructor(nome, cor, modelo){
        super(nome); 
        // como já está declada na classe pai, não é preciso declarar novamente, chamamos o 'super' que basicamente significa chamar o construtor da clase pai
        this.cor = cor;
        this.modelo = modelo;
    }
} 

class Tablet extends Dispositivo{
    constructor(nome, wifi){
        super(nome);
        this.wifi = wifi;
    }

    ligar() {
        console.log('Olá, você alterou o método ligar');
    }

    falaOi(){
        console.log('Oi');
    }
}

const xr = new Smartphone('Iphone', 'Preto', '12 mini');
console.log(xr);

const t1 = new Tablet('Ipad', true);
console.log(t1);
console.log(t1.ligado); // busca no prototype do pai, pq não existe nessa classe
t1.ligar(); // nesse caso, como existe esse método nessa classe tablet, não precisou buscar na classe pai, o método foi sobrescrito
t1.falaOi(); //método só do tablet, se alguma classe herdar de tablet, terá tudo que tablet e dispositivo tem