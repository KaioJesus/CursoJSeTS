// Polimorfismo -> Quando você tem duas classes filhas que tem um mesmo método que se comportam de maneira diferentes
// No JS o polimorfismo é o polimorfismo de sobrescrita, pois você cria uma classe filha e pega o método da classe pai sobrescrevendo ele, essa alteração do método vai funcionar somente para classe filha

function Conta(agencia, conta, saldo){
    this.agencia = agencia,
    this.conta = conta;
    this.saldo = saldo;
}

// Método sacar da Conta
Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`
Saldo insuficiente: R$${this.saldo}
Você tentou sacar R$${valor} `)
        return ;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(
        `Ag/conta: ${this.agencia}/${this.conta} | ` + 
         `Saldo: R$${this.saldo.toFixed(2)}`
    )
};

const conta = new Conta(4550, 400784, 500);
console.log(conta);
// conta.verSaldo();
// conta.depositar(1500);
// conta.sacar(200);
// conta.sacar(1900);

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;


// Método sacar da CC é sobrescrito para que haja o limite, mas é somente para ela
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`
Saldo insuficiente: R$${this.saldo}
Você tentou sacar R$${valor} `)
        return ;
    }

    this.saldo -= valor;
    this.verSaldo();
};

const contaDois = new ContaCorrente (35220, 3522, 1000, 100);
contaDois.sacar(1050);

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca(512, 20, 200);
contaPoupanca.sacar(210);
contaPoupanca.sacar(100);