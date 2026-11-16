// Lista B2 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição
// Exercício 5
// Fonte: prog-aula-B2 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Cada exercício corresponde a um código TypeScript distinto.
//
// DESCONTO – Leia o preço de um produto, calcule e exiba o valor final, considerando desconto de
// 35%.

import teclado from "npm:readline-sync";

let preco: number = 0,
    novoPreco: number = 0;

console.log("Digite o preço do produto:");
preco = teclado.questionFloat();

novoPreco = preco * 0.65;

console.log("O valor final com desconto é:");
console.log(novoPreco);
