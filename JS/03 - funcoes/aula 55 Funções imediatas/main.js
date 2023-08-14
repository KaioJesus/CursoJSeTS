// IIFE -> Immediately invoked function expression

//Queremos fugir do escopo global, porque podem ser alteradas, podem gerar alguma confusão


(function (idade, peso, altura) {
    //Tudo aqui é executado imediatamente estando fora do escopo global
    const sobrenome = 'Jesus';
    function criaNome(nome){
        return `${nome} ${sobrenome}`; //template literal
    }

    function falaNome(){
        console.log(criaNome('Kaio'));
    }

    falaNome();
    console.log(idade, peso, altura)
})(23, 73, 1.76);

(function (){
    //IIFE
})()