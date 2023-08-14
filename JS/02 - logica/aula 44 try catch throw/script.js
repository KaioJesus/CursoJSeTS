//lançar e capturar o erro throw, try and catch
//aprendendo a ler erros
//não devemos exibir erros para o usuário

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        // throw('x e y precisam ser números'); //lançar o erro, só vai aparecer a mensagem, porque lançamos uma string
        throw new Error('x e y precisam ser números'); //Vai lançar o erro e aparecer os erros declarados pelo javascript
    }

    return x + y;
}


try{
    console.log(soma(2,3));
    console.log(soma('1', 2))
} catch(error){
    console.log('Alguma coisa mais amigável pro usuário');
}


