//função que mostra hora

function retornaHora(data){
    if(data && !(data instanceof Date)){
        //instanceof -> instância da função construtura
        console.log('Não é');
        throw new TypeError('Esperando isntância de Date');
    }

    if(!data){
        data = new  Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour12: false, //retorna a hora sem o timezone

    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(error){
    console.log(error);
} finally{
    console.log('tenha um bom dia!')
}

