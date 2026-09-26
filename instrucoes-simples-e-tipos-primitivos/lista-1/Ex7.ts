import teclado from "npm:readline-sync";

let a: number = 0,
    b: number = 0;

console.log("digite o primeiro número:");
a = teclado.questionInt();

console.log("digite o segundo número:");
b = teclado.questionInt();

console.log(`Antes da troca: A = ${a}, B = ${b}`)

a += b; 
b = a - b;
a -= b; 

console.log(`Após a troca A = ${a}, B = ${b}`)