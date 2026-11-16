// Lista B2 — Introdução aos Aplicativos TypeScript Entrada, Saída e Atribuição
// Exercício 3
// Fonte: prog-aula-B2 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Cada exercício corresponde a um código TypeScript distinto.
//
// CARGA-HORÁRIA – Leia a carga-horária de um curso, informada em horas-aulas (50 minutos).
// Calcule e exiba a carga-horária em horas-relógio (60 minutos).

import teclado from	"npm:readline-sync";

let horasAulas:number = 0,
    horas:number = 0;

console.log("Digite a carga-horária do curso (em horas-aulas):");
horasAulas = teclado.questionFloat();

horas = (horasAulas*50) / 60;

console.log("A carga-horária do curso em horas-relógio é:")
console.log(horas);