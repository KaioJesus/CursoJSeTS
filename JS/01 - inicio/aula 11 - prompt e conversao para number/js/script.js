//alert('Hello!');
//confirm("Deseja realmente pagar?");
//vai abrir um pop up com uma mensagem com dois botoes "ok", se desejar continuar, ou "cancelar" se não desejar

const nome = prompt("Qual seu nome?")
// interação com usuario

const numeroUm = parseInt(prompt("Digite um número: "))
//parseint converte uma string número pra um número inteiro
const numeroDois = Number(prompt("Digite outro número: "))
//também converte uma string número para o tipo número, tudo que vem do usuário, vem como string

let soma = numeroUm + numeroDois;
alert(`Oi ${nome}, seu resultado foi: ${soma}`);