function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-br',{});
}

//setInterval() -> recebe a referência da função ou uma função anômima e o tempo em milissegundos

const timer = setInterval(() => {console.log(mostraHora())}, 1000); //executando a função de um em um segundo

//para o intervalo estabelicido anteriormente, é chamado da mesma forma, com função anônima e o tempo em milissegundos, é executada uma vez
setTimeout(() => {
    clearInterval(timer);
}, 10000);
