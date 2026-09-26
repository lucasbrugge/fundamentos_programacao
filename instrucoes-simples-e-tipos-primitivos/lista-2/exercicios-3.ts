import teclado from "npm:readline-sync";

let valor: number = Number(teclado.question("Digite o valor do saque: "));

let centavos: number = Math.round(valor * 100);

const notas100 = Math.floor(centavos / 10000); centavos %= 10000;
const notas50 = Math.floor(centavos / 5000);   centavos %= 5000;
const notas20 = Math.floor(centavos / 2000);   centavos %= 2000;
const notas10 = Math.floor(centavos / 1000);   centavos %= 1000;
const notas5 = Math.floor(centavos / 500);     centavos %= 500;
const notas2 = Math.floor(centavos / 200);     centavos %= 200;

const moedas100 = Math.floor(centavos / 100);  centavos %= 100;
const moedas50 = Math.floor(centavos / 50);    centavos %= 50;
const moedas25 = Math.floor(centavos / 25);    centavos %= 25;
const moedas10 = Math.floor(centavos / 10);    centavos %= 10;
const moedas5 = Math.floor(centavos / 5);      centavos %= 5;
const moedas1 = centavos;

console.log("Dinheiro retirado:");
console.log(`${notas100} nota(s) de R$ 100`);
console.log(`${notas50} nota(s) de R$ 50`);
console.log(`${notas20} nota(s) de R$ 20`);
console.log(`${notas10} nota(s) de R$ 10`);
console.log(`${notas5} nota(s) de R$ 5`);
console.log(`${notas2} nota(s) de R$ 2`);
console.log(`${moedas100} moeda(s) de R$ 1,00`);
console.log(`${moedas50} moeda(s) de R$ 0,50`);
console.log(`${moedas25} moeda(s) de R$ 0,25`);
console.log(`${moedas10} moeda(s) de R$ 0,10`);
console.log(`${moedas5} moeda(s) de R$ 0,05`);
console.log(`${moedas1} moeda(s) de R$ 0,01`);