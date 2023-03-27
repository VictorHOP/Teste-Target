let frase = prompt('Digite algo para inverter!');

let fraseInvertida = "";
for (let i = frase.length - 1; i >= 0; i--) {
  fraseInvertida += frase[i];
}

console.log('Frase invertida: ', fraseInvertida);
console.log('Frase Normal: ', frase); 