// Lista B2 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição
// Exercício 7
// Fonte: prog-aula-B2 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Cada exercício corresponde a um código TypeScript distinto.
//
// TROCA DE VALORES – Leia dois números inteiros, a e b, e faça com que eles troquem os valores
// entre si. Exiba os valores de a e b. Não se deve apenas alterar a ordem de exibição.

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
