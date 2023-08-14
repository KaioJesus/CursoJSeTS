try{
    //try recebe algo e caso exista o erro o catch pega
    console.log(naoExiste); //variavel que não existe e não está definida, para tratar o erro devemos usar o try
} catch(error){
    console.log('naoExiste não existe');
    console.log(error); //erro no parâmetro
}
