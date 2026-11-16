// Lista B2 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição
// Exercício 4
// Fonte: prog-aula-B2 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Cada exercício corresponde a um código TypeScript distinto.
//
// PERCENTUAL DE LEITURA – Leia a página atual e a quantidade de páginas de um livro. Calcule e
// exiba o percentual de leitura concluído.

import teclado from	"npm:readline-sync";

let paginaAtual:number = 0,
    qtdPaginas:number = 0,
    percentual:number = 0;

console.log("digite a página atual:");
paginaAtual = teclado.questionFloat();

console.log("digite a quantidade total de páginas do livro:");
qtdPaginas   = teclado.questionFloat();

percentual = (paginaAtual*100) / qtdPaginas;

console.log("o percentual de leitura é:");
console.log(percentual, "%");
