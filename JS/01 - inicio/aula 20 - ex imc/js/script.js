function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (evento) {
    //     //previne o que aconteceria por padrão, nesse caso não enviar o formulário e não atualizar a página
    //     evento.preventDefault();
    // };

    //outra forma de fazer o que foi feito acima;
    form.addEventListener('submit', function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value

        });
     
        console.log(pessoas);

        // mostra/altera elementos na terra
        resultado.innerHTML = `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`


        //para pegar o valor usa o nome da variavel.value
        // console.log(nome.value, sobrenome.value, peso.value, altura.value);
    });

}


meuEscopo ();
