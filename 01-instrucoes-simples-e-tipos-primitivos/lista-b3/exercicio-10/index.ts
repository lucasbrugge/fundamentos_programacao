// Lista B3 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição (2)
// Exercício 10
// Fonte: prog-aula-B3 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Cada exercício corresponde a um código TypeScript distinto.
//
// VELOCIDADE MÉDIA - Leia uma distância (em quilômetros) e o tempo transcorrido (em horas).
// Calcule e retorne a velocidade média atingida. Justifique o que acontece se o tempo digitado for zero.

import teclado from "npm:readline-sync";

let qtdBarras: number = 0;
let perimetro:number = 0;
const BARRAS: number = 2.7;

console.log("De o valor do Perimentro: ");
perimetro = teclado.questionInt();

perimetro = perimetro * 1.10;

qtdBarras = Math.ceil(perimetro / BARRAS);

console.log("Quantidade de barras: ", qtdBarras);
