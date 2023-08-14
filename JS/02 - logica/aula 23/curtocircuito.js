/* falsy values -> valores que são falsos
false
0
'' "" ``
null / undefined
NaN
*/

console.log('Kaio' && 'Kauã');
//vai retonar o último valor verdadeiro caso a expressão seja verdadeira

console.log('Kaio' && 'Kauã' && '');
//vai retornar o valor falso, caso a expressão seja falsa

