// Lista C3 — Programação Orientada a Objetos
// Exercício 3
// Fonte: prog-aula-C3 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Enfoque a modelagem e consequente interação com a interface dos objetos. Nenhuma instrução de
// saída deve ser utilizada nas classes de modelagem.
//
// Modele a interação de pessoas cumprimentando-se. Cada pessoa é representada unicamente pelo
// primeiro nome. Em termos de modelagem e implementação, uma pessoa pode cumprimentar outra
// de três maneiras: sem saber o nome; sabendo apenas nome (passado como parâmetro); ou
// conhecendo a outra pessoa (tendo outro objeto passado como parâmetro). No primeiro caso, o
// cumprimento será apenas “Olá!”, enquanto os outros dois incluem o nome da outra pessoa no
// cumprimento: “Olá, Tony Stark!”.

import Pessoa from "./Pessoa.ts";

let homemDeFerro: Pessoa = new Pessoa("Tony Stark");

console.log("Cumprimentando alguém que eu não conheço:");
console.log(homemDeFerro.cumprimenta());

console.log("Cumprimentando alguém que eu sei o nome:");
console.log(homemDeFerro.cumprimentaPeloNome("Thanos"));

let capitaoAmerica : Pessoa = new Pessoa("Steve Rogers");

console.log("Cumprimentando alguèm que eu conheço:");
console.log(homemDeFerro.cumprimentaPessoa(capitaoAmerica));