// Promises -> trabalhamos com promises quando vamos utilizar algo assíncrono, normalmente com API'S
function rand(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){ // só simula uma coisa que demora
    return new Promise ((solve, reject) => {
        setTimeout(() => { 
            if(typeof msg !== 'string'){
                reject('Cai no erro'); 
                return;
            } 
            solve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo)
    }) 
}

/*
esperaAi('Fase 1', rand()).then((valor) => {
    console.log(valor)
    return esperaAi('Fase 2', rand())
})
    .then(valor => {
        console.log(valor)
        return esperaAi('Fase 3', rand())
    })
    .then(valor => {
        console.log(valor)
        return valor
    })
    .then(fase => console.log('terminamos na fase: ', fase))
    .catch(e => console.log(e)) */

//Mesma coisa do que tá escrito acima
// async permite que você utilize o await dentro de uma função, para esperar por uma promise ser finalizada
async function executa(){
    try{ // tenta compilar e caso ache o erro, vai para o catch
        const faseUm =  esperaAi('Fase 1', rand()); // promise pendente, por estar sem o await e nem o thens
        console.log(faseUm)

        setTimeout(()=>{
            console.log('Essa promise estava pendente:', faseUm)
        }, 1000)
    
        const faseDois = await esperaAi('Fase 2', rand());
        console.log(faseDois)
    
        const faseTres = await esperaAi('Fase 3', rand());
        console.log(faseTres)
    
        console.log('Terminamos na fase: ', faseTres)
    } catch(error){ // quando acha o erro vem para cá
        console.log(error)
    }
}

executa();

/*
Estados de uma promise:
Pending (pendente) -> Está sendo executada e não retornou o valor
Fullfilled -> representação dela resolvida, sucesso
rejected -> promise rejeitada

*/ 
