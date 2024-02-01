const request = (obj) => {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest(); // 
        xhr.open(obj.method, obj.url, true)
        xhr.send()
    
        xhr.addEventListener('load', () =>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText); 
            } else {
                reject(xhr.statusText)
            }
        })
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

async function carregaPagina(el){
    try{
        const href = el.getAtrribute('href'); // pega o atributo
        console.log(href);
        const objConfig = {
            method: 'GET',
            url: href,
        };
        
        // request(objConfig).then(response => {
        //     carregaResultado(response)
        // }).catch(error => console.log(error));
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(error) {
        console.log(error);
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}