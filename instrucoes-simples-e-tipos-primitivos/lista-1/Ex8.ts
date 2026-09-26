import teclado from "npm:readline-sync";

let numero = 0,
    quadrado = 0;

console.log("Digite o número para fazelo ao quadrado:")
numero = teclado.questionFloat();

quadrado = numero*numero;

console.log(`Número ${numero} ao quadrado é ${quadrado}`);
