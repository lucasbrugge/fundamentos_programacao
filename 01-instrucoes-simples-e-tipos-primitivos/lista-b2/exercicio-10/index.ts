// Lista B2 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição
// Exercício 10
// Fonte: prog-aula-B2 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Cada exercício corresponde a um código TypeScript distinto.
//
// DÍGITO VERIFICADOR – Leia o número de uma conta corrente, que tem até seis dígitos
// (desnecessária a validação). Calcule o dígito verificador dessa conta corrente, de acordo com o
// seguinte algoritmo:
// – Multiplique cada dígito pela respectiva posição, da esquerda para a direita;
// – Some os resultados das multiplicações;
// – Calcule o resto da divisão dessa soma por 10;
// – Subtraia esse valor de 10.
// – Assuma o resultado como dígito verificador da conta.
// Exemplo para a conta 789123:
// 7 8 9 1 2 3 = número da conta
// | | | | | |
// x1 x2 x3 x4 x5 x6
// | | | | | |
// =7 =16 =27 =4 =10 =18 -> soma = 82
// resto da divis˜ão de 82 por 10 = 2
// dígito verificador = (10 – 2) = 8
// A conta, com o dígito verificador, será: 789123-8.

import teclado from "npm:readline-sync";

let conta: number = 0,
    d1: number = 0,
    d2: number = 0,
    d3: number = 0,
    d4: number = 0,
    d5: number = 0,
    d6: number = 0,
    resto : number,
    soma: number = 0,
    verificador: number = 0;

console.log("Digite o número da conta corrente:");
conta = teclado.questionInt();

d1 = Math.trunc(conta / 100000);
resto = conta % 100000;

d2 = Math.trunc(resto / 10000);
resto = conta % 10000;

d3 = Math.trunc(resto / 1000);
resto = conta % 1000;

d4 = Math.trunc(resto / 100);
resto = conta % 100;

d5 = Math.trunc(resto / 10);
resto = conta % 10;

d6 = resto;

soma = d1 + d2*2 + d3*3 + d4*4 + d5*5 + d6*6;

resto = soma % 10;

verificador = 10 - resto;

console.log();
console.log("O dígito verificador da conta é:");
console.log(verificador);
