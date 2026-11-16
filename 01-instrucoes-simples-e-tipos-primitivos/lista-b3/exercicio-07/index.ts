// Lista B3 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição (2)
// Exercício 7
// Fonte: prog-aula-B3 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Cada exercício corresponde a um código TypeScript distinto.
//
// ESCADA – Conforme o exemplo da figura abaixo, leia a altura do prédio e a distância de afastamento
// da escada. Calcule e exiba o comprimento mínimo que a escada deve ter para alcançar o topo do
// prédio.
//
// Figura do PDF (página 2): altura do prédio = 12; afastamento = 5; comprimento da escada = x.

import teclado from "npm:readline-sync";

const alturaPredio: number = Number(teclado.question("Digite a altura do predio: "));
const afastamento: number = Number(teclado.question("Digite o afastamento da escada: "));

const comprimentoEscada: number = Math.hypot(alturaPredio, afastamento);

console.log(`Comprimento minimo da escada: ${comprimentoEscada.toFixed(2)}`);