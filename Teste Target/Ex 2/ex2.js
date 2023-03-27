let numero = parseInt(prompt("Número: "));

let fibAnt = 0;
let fibAtual = 1;

if (numero === fibAnt || numero === fibAtual) {
  console.log("O número informado pertence à sequência de Fibonacci!");
} else {

  while (fibAtual <= numero) {

    let fibProx = fibAnt + fibAtual;

    if (numero === fibProx) {
      console.log("O número informado pertence à sequência de Fibonacci!");
      break;
    }
    fibAnt = fibAtual;
    fibAtual = fibProx;
  }
  if (fibAtual < numero) {
    console.log("O número informado não pertence à sequência de Fibonacci!");
  }
}