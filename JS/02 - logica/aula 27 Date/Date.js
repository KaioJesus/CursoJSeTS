
// console.log(data.getHours());
// console.log(data.getMinutes());
// console.log(data.getSeconds());
function zeroAEsquerda (num){
    return num => 10 ? num : `0${num}`;
    //para colocar um zero a esquerda quando os segundos forem menor que 10
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); //mes não começa no zero
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}


const data = new Date();
console.log(data.toString()); // Mon Jul 24 2023 23:30:02 GMT-0300 (Horário Padrão de Brasília)
const dataBrasil = formataData(data);
console.log(dataBrasil);


// function mostraHoras(){
//     const data = new Date();
//     const hora = data.getHours();
//     const minuto = data.getMinutes();
//     const segundo = data.getSeconds();

//     const horas = document.querySelector('.horas');
//     const minutos = document.querySelector('.minutos');
//     const segundos = document.querySelector('.segundos');

//     horas.innerHTML = hora;
//     minutos.innerHTML = minuto;
//     segundos.innerHTML  =segundo;
// }

// mostraHoras();