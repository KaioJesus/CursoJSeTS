// cpf é string, receber o input como string
// se o usuário digitar com dígitos e traços, tirar com o replace


function validaCPF(cpf){

    const cpfLimpo = cpf.replace(/\D+/g, ''); //retira todos os números

    if(typeof cpfLimpo !== 'string' || cpfLimpo.length !== 11 ) 
        return 'Inválido';
    
    // const cpfArray = Array.from(cpfLimpo); // outra forma de transformar como array

    const cpfArrayParcial = cpfLimpo.split('').splice(0, 9);
    // const cpfArray = cpfLimpo.split('');
    // const cpfParcial = cpfArray.splice(0, 9);

    let somaParaPrimeiroDigito = cpfArrayParcial
    .map((valor, indice) => Number(valor) * (10 - indice))
    .reduce((acumulador, valor) => acumulador += valor, 0);

    let primeiroDigito = 11 - (somaParaPrimeiroDigito % 11);
    if(11 - (somaParaPrimeiroDigito % 11) > 9) primeiroDigito = 0;
    
    const cpfComPrimeiroDigito = cpfArrayParcial.concat(String(primeiroDigito));
    
    // mesma regra que o primeiro digíto, só incluindo o mesmo para fazer o cálculo do segundo;
    let somaParaSegundoDigito = cpfComPrimeiroDigito.reduce((acumulador, valor, indice) => acumulador += Number(valor) * (11 - indice), 0)
    
    let segundoDigito = 11 - (somaParaSegundoDigito % 11);
    if(11 - (somaParaSegundoDigito % 11) > 9) segundoDigito = 0;
    
    const cpfInteiro = cpfComPrimeiroDigito
        .concat(String(segundoDigito))
        .join('');
    

    return cpf + ' ' + (cpfInteiro === cpfLimpo);
}

console.log(validaCPF('16194402709'))

