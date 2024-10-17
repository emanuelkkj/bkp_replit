// LOCALIZAR ELEMENTOS DO HTML
// CEIAS : EMAIL  / TELEFONE / IDADE / SEXO 
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const telafone = document.getElementById('telefone');
const idade = document.getElementById('idade');
const sexo = document.getElementById('sexo');


// CRIAR VARIAVEIS
const novoNome = "Josseph Cadura"
const novoSobrenome = "Rigollini"
const novoEmail = "cadura20@gmail.com"
const novoTelefone = "999999999"
const novaIdade = "59 anos"
const novoSexo = "Masculino"


// ATRIBUIR VALORES AO HTML COM OS VALORES
// DAS NOSSAS VARIAVEIS
nome.innerText = novoNome
sobrenome.innerText = novoSobrenome
email.innerText = novoEmail
telefone.innerText = novoTelefone
idade.innerText = novaIdade
sexo.innerText = novoSexo