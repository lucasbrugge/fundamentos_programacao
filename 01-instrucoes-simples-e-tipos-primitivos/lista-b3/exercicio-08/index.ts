// Lista B3 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição (2)
// Exercício 8
// Fonte: prog-aula-B3 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Cada exercício corresponde a um código TypeScript distinto.
//
// JUROS COMPOSTOS – Leia o valor investido em uma aplicação, a taxa de juros (ao mês, em
// percentual) e a quantidade de meses transcorridos. Exiba o montante depois de transcorrido o tempo,
// considerando duas casas decimais depois da vírgula. Use o método Number.toFixed().

import teclado from "npm:readline-sync";

const valorInvestido: number = Number(teclado.question("Digite o valor investido: "));
const taxaJuros: number = Number(teclado.question("Digite a taxa de juros mensal (%): "));
const meses: number = Number(teclado.question("Digite a quantidade de meses: "));

const taxaDecimal: number = taxaJuros / 100;
const montante: number = valorInvestido * Math.pow(1 + taxaDecimal, meses);

console.log(`Montante final: R$ ${montante.toFixed(2)}`);