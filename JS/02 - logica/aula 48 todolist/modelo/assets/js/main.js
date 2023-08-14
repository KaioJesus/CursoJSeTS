const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}
 
inputTarefa.addEventListener('keypress', function(e) {//keypress -> tecla pressionada
  if (e.keyCode === 13) {//quando o enter for pressionado, cria a tarefa 
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
    inputTarefa.value = ''; //apagar os dados
    inputTarefa.focus();  //deixar focado no input
}

function criaBotaoApagar(li) {
    li.innerText += ' '; // dar um espaço quando criar
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoAdicionarTarefa.classList.add('apagar'); adicionando uma classe ao botao
    botaoApagar.setAttribute('class', 'apagar') //serve para qualquer atributo, para uma tag <a>, poderia 'setar' o 'href'
    botaoApagar.setAttribute('title', 'Apagar esta tarefa') 
    li.appendChild(botaoApagar);
    // salvarTarefas();
}

function criaTarefa(textoInput) {
    const li = criaLi(); //variavel que recebe uma função que cria a li
    li.innerText = textoInput;
    tarefas.appendChild(li) //lista recebe essa variavel-função para por o li dentro dela como filha
    limpaInput();
    criaBotaoApagar(li);  //botao entra na li como filho;
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if(!(inputTarefa.value)) return; //retorna nada
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {

    const element = e.target;
    if(element.classList.contains('apagar')){
       element.parentElement.remove(); //parentElement -> vai remover o pai dele o que consequentemente deletará o próprio
       salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //trim para remover os espaços
        listaDeTarefas.push(tarefaTexto);
        //push para enviar para o arrays
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // convertendo o json em string, uma string similar ao array
    localStorage.setItem('tarefas', tarefasJSON); //no localstorage só pode ser salvo como stringy
    //LocalStorage para guardar no navegador os dados enviados
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();