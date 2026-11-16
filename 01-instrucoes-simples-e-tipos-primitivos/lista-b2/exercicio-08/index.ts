// Lista B2 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição
// Exercício 8
// Fonte: prog-aula-B2 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Cada exercício corresponde a um código TypeScript distinto.
//
// QUADRADO – Leia um número inteiro, calcule e exiba o seu quadrado.

import teclado from "npm:readline-sync";

let numero = 0,
    quadrado = 0;

console.log("Digite o número para fazelo ao quadrado:")
numero = teclado.questionFloat();

quadrado = numero*numero;

console.log(`Número ${numero} ao quadrado é ${quadrado}`);
