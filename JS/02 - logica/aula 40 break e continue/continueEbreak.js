const numeros = [1,2,3,4,5,6,7,8,9,10];

for(let numero of numeros){

    if (numero === 2)
         continue;
        //continue vai pular o numero quando encontrado

    if (numero === 7)
        break;
    //break sai do loop

    console.log(numero)
}