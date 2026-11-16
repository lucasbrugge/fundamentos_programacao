// Lista B2 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição
// Exercício 9
// Fonte: prog-aula-B2 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Cada exercício corresponde a um código TypeScript distinto.
//
// MCDU – Leia um número inteiro positivo de até quatro dígitos. Mostre, separadamente (uma por
// linha): unidades de milhar, centenas, dezenas e unidades desse número. Assuma que nenhum
// número maior, ou negativo, será digitado.

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