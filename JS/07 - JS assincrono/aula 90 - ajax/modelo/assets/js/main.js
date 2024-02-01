const request = (obj) => {
    const xhr = new XMLHttpRequest(); // construtor do xml
    xhr.open(obj.method, obj.url, true)
    // recebe o método html (get, etc), a url e um boolean para dizer se é assincrono ou nao
    xhr.send() // se fosse o método post seria o send, como por exempplo para mandar os dados do formulário;

    // checar quando a requisição for carregada

    xhr.addEventListener('load', () =>{
        if(xhr.status >= 200 && xhr.status < 300){
            obj.sucess(xhr.responseText); // response text -> html
        } else {
            obj.error(xhr.statusText
                // {
                // code: xhr.status, // qual numero do status
                // msg: xhr.statusText // texto do status
                // }
            )
        }
    })
}

//document -> qualquer elemento
document.addEventListener('click', e => {
    const el = el.target;
    const tag = el.tagName.toLowerCase(); //pegando o nome do elemento que foi clicado e colocando em minusculo (pq sem esse metodo, o tagname sempre retorna em maiusculo);    
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
})

function carregaPagina(el){
    const href = el.getAtrribute('href'); // pega o atributo
    console.log(href);
    const objConfig = {
        method: 'GET',
        url: href,

        sucess(response){
            carregaResultado(response)
        },
        error(errorText){
            console.log(errorText)
        }
    };
    request(objConfig);
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}