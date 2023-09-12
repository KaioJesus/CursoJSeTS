//filter -> filtra o array e não edita o array original, cria um novo
//retorna um vetor do mesmo tamanho ou menor

const numeros = [5, 50, 80, 1 , 3 ,5 ,8 , 7 , 11, 15, 22, 27];
let arrNum = [];
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 10)
        arrNum.push(numeros[i])
}

console.log(arrNum);

//filtrar numeros maiores que 10
function callbackFilter(valor){
    // itera sobre os valores
    return valor > 10
        // retorna um boolean, verdadeiro -> entra no novo array, falso -> nao entra no novo array
}

let numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);
