const arrUm = [1, 2, 3]
const arrDois = [7, 8, 9]
let arrTres = arrUm.concat(arrDois);
//concatenar
console.log(arrTres);

arrTres = arrTres.concat([4,5,6], 'Kaio');
console.log(arrTres);

// com spread operator
let arrQuatro = [...arrUm, ...[4,5,6],...arrDois];
console.log(arrQuatro);