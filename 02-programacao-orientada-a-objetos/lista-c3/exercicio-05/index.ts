// Lista C3 — Programação Orientada a Objetos
// Exercício 5
// Fonte: prog-aula-C3 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Enfoque a modelagem e consequente interação com a interface dos objetos. Nenhuma instrução de
// saída deve ser utilizada nas classes de modelagem.
//
// Modele e implemente a rolagem de um dado com n faces. O número de faces deve ser informado na
// criação do objeto e não pode ser alterado. Ofereça métodos para rolar o dado e para observar o
// número da última rolagem. Para isso, pesquise como fazer a geração de números aleatórios na
// linguagem.

import Dado from "./Dado.ts";

let d20: Dado = new Dado(20);

console.log(d20.rolar());
console.log();
console.log(d20.getRolagem());