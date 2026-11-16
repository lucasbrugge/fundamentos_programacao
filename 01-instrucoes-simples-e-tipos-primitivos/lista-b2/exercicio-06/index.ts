// Lista B2 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição
// Exercício 6
// Fonte: prog-aula-B2 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Cada exercício corresponde a um código TypeScript distinto.
//
// AUMENTO – Leia o valor de um salário, calcule e exiba-o reajustado, considerando um aumento de
// 12,5%.

import teclado from "npm:readline-sync";

let salario: number = 0,
    novoSalario: number = 0;

console.log("digite o salario a receber reajuste:");
salario = teclado.questionFloat();

novoSalario = salario * 1.125;

console.log("salario com reajuste de 12.5%");
console.log(novoSalario);