try{
    console.log(a);
    console.log('Abri um arquivo');
    console.log("Manipulei o arquivo")
    console.log('Fechei o arquivo')
    //É executado quando não á herros
} catch (error){
    console.log('Tratando o erro');
    // É executada quando há erros
} finally {
    console.log('Finally: Eu sempre sou executado');
    //executado sempre
}