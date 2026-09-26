import teclado from "npm:readline-sync";

const p1: number = Number(teclado.question("Pontuacao 1: "));
const p2: number = Number(teclado.question("Pontuacao 2: "));
const p3: number = Number(teclado.question("Pontuacao 3: "));
const p4: number = Number(teclado.question("Pontuacao 4: "));
const p5: number = Number(teclado.question("Pontuacao 5: "));

const primeiro: number = Math.max(p1, p2, p3, p4, p5);
const ultimo: number = Math.min(p1, p2, p3, p4, p5);

console.log(`Primeiro colocado: ${primeiro}`);
console.log(`Ultimo colocado: ${ultimo}`);