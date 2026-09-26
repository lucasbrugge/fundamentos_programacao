import teclado from "npm:readline-sync";

let numero: number = 0;

console.log("Digite um número de até 4 digitos para classificalo:")
numero = teclado.questionFloat();

console.log(Math.trunc(numero / 1000));
numero %= 1000;
console.log(Math.trunc(numero / 100));
numero %= 100;
console.log(Math.trunc(numero / 10));
numero %= 10;
console.log(Math.trunc(numero / 1));