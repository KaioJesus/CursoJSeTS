// Promises -> trabalhamos com promises quando vamos utilizar algo assíncrono, normalmente com API'S
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise ((solve /* esse parâmetro quer dizer que executou com sucesso*/, reject /* para falar que deu erro e rejeitar o código*/) => {
        setTimeout(() => { // estabelece um tempo para o que estiver dentro ser exibido
            if(typeof msg !== 'string') reject('Bad value'); // ou reject(new Error('bad value'))
            solve(msg);
        }, tempo)
    }) //construtor da promise
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22222, rand(1, 3))
    })
    // .then(resposta => {
    //     console.log(resposta);
    //     return esperaAi('Tratando os dados da BASE', rand(1, 3))
    // })
    .then(resposta => {
        console.log(resposta);
    })
    .then(()=> console.log('Exibe dados na tela'))
    .catch( (error) => {console.log('Erro:', error)}) // ele espera uma string, recebe um numero e o catch pega o erro e lança e termina a promise
// then -> executa quando resolve a promise
// catch -> captura o erro do reject