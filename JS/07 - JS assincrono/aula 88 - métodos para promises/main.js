// Promises -> trabalhamos com promises quando vamos utilizar algo assíncrono, normalmente com API'S
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise ((solve /* esse parâmetro quer dizer que executou com sucesso*/, reject /* para falar que deu erro e rejeitar o código*/) => {
        setTimeout(() => { // estabelece um tempo para o que estiver dentro ser exibido
            if(typeof msg !== 'string'){
                reject(false); // ou reject(new Error('bad value'))
                return;
            } 
            solve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo)
    }) //construtor da promise
}

// promise.all, promise.race, promise.resolve, promise.reject

const promises = [
    esperaAi('Primeira promise', rand(1,5)), 
    esperaAi('Segunda promise', rand(1,5)), 
    esperaAi('Terceira promise', rand(1,5)), 
    // esperaAi(1, 1),
    // 'Outro valor'
];

Promise.all(promises) //resolver todas as promises
    .then(valor => console.log(valor))
    .catch(erro => console.log(erro));  // quando há erro não vai retornar as promises, somente o erro
Promise.race(promises).then(valor => console.log(valor)); //entrega o valor da promise mais rápida, levar menos tempo

function baixaPagina(){
    const emCache = true; 
    if(emCache){
        return Promise.resolve('Pagina em cache'); //retorna a promessa resolvida
    } else if (!emCache) {
        return Promise.reject('erro'); //retorna a promessa rejeitada
    }
}

baixaPagina().then(dados => console.log(dados)).catch(error => console.log('erro', error))