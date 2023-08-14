const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p');

// nodeList -> lista de nós que são tags ou textos que estão dentro de uma tag, nesse caso são vários 'p' que estão dentro de uma div
console.log(ps); // Retorna uma nodeList, não é um array, o comportamento é similar a um e podemos usar as mesmas funções que manipulamos um array

//receber a cor de fundo do body e passar para o fundo do parágrafo, além de mudar para cor branca
//pegando os estilos do body
const estilosBody = getComputedStyle(document.body); //todos os estilos computados pelo browser
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);



//duas formas de fazer
for (let p of ps) {
    //style para mudar o estilo da tag
    p.style.backgroundColor = backgroundColorBody;
    //para pegar cada p único e pôr o background
    p.style.color = 'white';
    console.log(p);
}

ps.forEach(element => {
    element.style.backgroundColor = backgroundColorBody;
    element.style.color = 'white';
    // console.log(p);
})
