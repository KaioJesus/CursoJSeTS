let umaString = "Um \"texto\"";
// \'\' colocar entre aspas dentro de uma string
console.log(umaString);

umaString = "a\ta";
// \t = um tab
console.log(umaString);

umaString="Um texto"
console.log(umaString[0], umaString[3], umaString[5]);
//pega o caractere da string a partir do indice

console.log(umaString.charAt(6));
//pega o caractere da string a partir do indice

console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);
//concatenação três formas

console.log(umaString.indexOf('m'));
//pegar o indíce do caractere, se for uma palavra, vai retornar o índice da primeira letra

umaString = "O rato roeu a roupa do rei de roma";
console.log(umaString.replace(/O/gi, '#'));
//replace substitui letra ou palavras para o que você deseja, nesse caso eu utilizei o 'gi' para substituir todas as letras 'o', seja miníscula ou maiúscula

console.log(umaString.length);
//tamanho da string

console.log(umaString.slice(0, 11));
//inclui o 0 mas exclui o 11, indo até o índice 10

console.log(umaString.split(' '));
//método de dividir a string, nesse caso o parâmetro é o espaço, vai separar em array todas as palavras separadas por espaço, o segundo parâmetro diz quantas vezes você quer isso, caso não tenha, vai pegar todas as vezes

