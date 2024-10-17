/**
*FUNÇÕES SÃO BLOCOS QUE PODEM SER REUTILIZADOS
*FUNÇÕES PODEM OU NÃO RECEBER PARÂMETROS
*FUNÇÕES PODEM RETORNAR VALORES OU NÃO
*FUNÇÕES PODEM SER ANÔNIMAS  
*/
// DECLARAÇÃO DE FUNÇÃO


function dados(nome, idade, altura) {
  window.alert(nome, idade, altura)
  console.log('ola' + nome, 'você tem' + idade, 'e' + altura'de altura')
}
dados(nome, idade, altura)

alert('ok')