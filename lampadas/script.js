//IDENTIFICAR OS ELEMENTOS DOM (ÁRVORE HTML)
const btnTrocar = document.getElementById('bnt-trocar')
const lampada = document.getElementById('lampada')
let baseURL = "https://95e34ace-62d9-4f7f-840e-aa38b6f16d8b-00-3ixyyix722q98.riker.replit.dev/"
alert(lampada.src)
btnTrocar.addEventListener('click', function() {
  //alert(lampada.src == baseURL + "lampada0.png")
  if (lampada.src == baseURL + "lampada0.png") {
    lampada.src = "lampada2.png"
  } else {
    lampada.src = "lampada0.png"
  }
})