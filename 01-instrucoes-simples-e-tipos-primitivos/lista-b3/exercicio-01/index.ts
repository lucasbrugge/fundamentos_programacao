// Lista B3 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição (2)
// Exercício 1
// Fonte: prog-aula-B3 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Cada exercício corresponde a um código TypeScript distinto.
//
// REFRIGERANTES – Leia a quantidade de pessoas que confirmaram presença em uma
// confraternização. Considere que cada pessoa bebe, em média, 300ml de refrigerante e que cada
// garrafa da bebida tem 2l. Identifique as constantes e fixe-as no código. Calcule e exiba quantas
// garrafas devem ser compradas.

import teclado from "npm:readline-sync";

const ML_POR_PESSOA = 300;
const ML_POR_GARRAFA = 2000; //

const pessoas: number = Number(teclado.question("Digite a quantidade de pessoas: "));
const totalMl: number = pessoas * ML_POR_PESSOA;
const garrafas: number = Math.ceil(totalMl / ML_POR_GARRAFA);

console.log(`Devem ser compradas ${garrafas} garrafa(s).`);