import teclado from "npm:readline-sync";

let valor: number = Number(teclado.question("Digite o valor do saque: "));

const notas100 = Math.floor(valor / 100);
valor %= 100;

const notas50 = Math.floor(valor / 50);
valor %= 50;

const notas20 = Math.floor(valor / 20);
valor %= 20;

const notas10 = Math.floor(valor / 10);
valor %= 10;

const notas5 = Math.floor(valor / 5);
valor %= 5;

const notas2 = Math.floor(valor / 2);
valor %= 2;

const moedas1 = valor;

console.log("Dinheiro retirado:");
console.log(`${notas100} nota(s) de R$ 100`);
console.log(`${notas50} nota(s) de R$ 50`);
console.log(`${notas20} nota(s) de R$ 20`);
console.log(`${notas10} nota(s) de R$ 10`);
console.log(`${notas5} nota(s) de R$ 5`);
console.log(`${notas2} nota(s) de R$ 2`);
console.log(`${moedas1} moeda(s) de R$ 1`);