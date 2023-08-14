function relogio(){
    function getTimeFromSeconds(segundos){
        const data = new Date(segundos * 1000); //multiplicando o segundo pelos milésimos de segundos
    
        return data.toLocaleTimeString('pt-br',{
            hour12: false,
            timeZone: 'UTC' //tempo zero
        });
    }
    
    const relogio = document.querySelector('.relogio');
    //não é preciso mais das variáveis por conta da propriedade target
    
    // const botaoInicia = document.querySelector('.iniciar')
    // const botaoPausa = document.querySelector('.pausar')
    // const botaoZera = document.querySelector('.zerar')
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(() =>{
            segundos++; //aqui os segundos está como número normal
            relogio.innerHTML = getTimeFromSeconds(segundos); //formata os segundos para o formato de hora
        }, 1000);
    }
    
    document.addEventListener('click', (e) => {
        const element = e.target; //target identifica o elemento que está sendo clicado
        if(element.classList.contains('iniciar')){
            relogio.classList.remove('pausado')
            clearInterval(timer); //para quando clicar mais de uma vez não ficar sobrepondo
            iniciaRelogio();
        }
    
        if(element.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado'); //adiciona a classe
        }
    
        if(element.classList.contains('zerar')){
            relogio.classList.remove('pausado') //remove a classe
            clearInterval(timer);
            relogio.innerHTML = "00:00:00"
            segundos = 0; //quando zerar, o segundos volta a ser 0
        }
    })
}


//Forma acima mais performática, pois contém apenas um evento de click

// botaoInicia.addEventListener('click', (e) =>{
//     relogio.classList.remove('pausado')
//     segundos = 0; //quando zerar, o segundos volta a ser 0
//     clearInterval(timer); //para quando clicar mais de uma vez não ficar sobrepondo
//     iniciaRelogio();
// })

// botaoPausa.addEventListener('click', (e) => {
//     clearInterval(timer);
//     relogio.classList.add('pausado'); //adiciona a classe
// })

// botaoZera.addEventListener('click', (e) => {
//     relogio.classList.remove('pausado') //remove a classe
//     clearInterval(timer);
//     relogio.innerHTML = "00:00:00"
//     segundos = 0; //quando zerar, o segundos volta a ser 0
// })