// Lista B2 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição
// Exercício 2
// Fonte: prog-aula-B2 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Cada exercício corresponde a um código TypeScript distinto.
//
// MÉDIA PONDERADA – Leia as notas de quatro avaliações e calcule a média ponderada, sabendo-se
// que os pesos são respectivamente: 1, 2, 3 e 4.

import teclado from	"npm:readline-sync";

let n1:number = 0,
    n2:number = 0,
    n3:number = 0,
    n4:number = 0,
    media:number = 0;

console.log("Entre com a primeira nota:");
n1 = teclado.questionFloat();
console.log("Entre com a segunda nota:");
n2 = teclado.questionFloat();
console.log("Entre com a terceira nota:");
n3 = teclado.questionFloat();
console.log("Entre com a quarta nota:");
n4 = teclado.questionFloat();

media = ((n1 * 1) + (n2 * 2) + (n3 * 3) + (n4 * 4)) / 10;

console.log("Média Ponderada:");
console.log(media);