const elementos =[
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
]

const container = document.querySelector('.container'); //selecionamos o container
const div = document.createElement('div'); // criamos a div

for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]; // desestruturando o objeto e fazendo com que os atributos sejam recebidos como variáveis para cada índice  do array
    let elemento = document.createElement(tag); //criando um elemento a partir do valor da tag recebida
    // elemento.innerHTML = texto; // a tag recebendo o texto
    elemento.innerText = texto; // como não havia tag html no texto, pode ser o usado o innerText
    div.appendChild(elemento); // adicionando o novo elemento na div
}


container.appendChild(div); // adicionamos a div dentro da section