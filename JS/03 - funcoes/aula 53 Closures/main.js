//Closures -> é a capacidade de uma funcao ter uma outra funcao e essa funcao ter a capacidade de acessar o escopo lexico e retorna dentro dessa funcao, alguma coisa que esteja no escopo lexico.

//Closure -> está relacionado ao escopo léxico

//Global
function retornaFuncao(){
    const nome = 'Kaio';
    return () =>{
        return nome; // Nesse caso o closure é o nome porque a função acaba quando retorna o nome
        //Closure -> A habilidade de uma função em acessar seu escopo léxico, nesse caso são três escopos: O global, da função mãe, e o escopo dela mesma;
    };
}

const funcao = retornaFuncao(); //retorna a funcao anonima
console.dir(funcao); //executa a funcao