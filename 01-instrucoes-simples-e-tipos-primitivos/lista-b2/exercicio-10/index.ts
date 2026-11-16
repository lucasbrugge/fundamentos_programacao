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
