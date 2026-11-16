// Lista C3 — Programação Orientada a Objetos
// Exercício 2
// Fonte: prog-aula-C3 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Enfoque a modelagem e consequente interação com a interface dos objetos. Nenhuma instrução de
// saída deve ser utilizada nas classes de modelagem.
//
// Modele um objeto que implemente um automóvel, com abstração focada nas informações básicas de
// abastecimento. Cada automóvel tem um tanque de combustível com determinada capacidade em
// litros. Essa capacidade não sofre alterações ao longo da existência do modelo.
// O tanque de combustível inicia vazio e há duas formas de abastecer o veículo. Na primeira forma, o
// tanque é completado até o máximo da capacidade. Na outra, deve-se informar quantos litros de
// combustível serão colocados (obviamente, não excedendo a capacidade do tanque).
// A representação textual do objeto fornece uma cadeia de caracteres que contém: a quantidade de
// combustível, a capacidade do tanque e, percentualmente, quanto o tanque está cheio.

import Automovel from "./Automovel.ts";

let porsche: Automovel = new Automovel(67);

console.log("Comprei outro carro novo:");
console.log(porsche.toString());

console.log("Abasteci com 10 litros:");
porsche.abastece(10);
console.log(porsche.toString());

console.log("Abasteci com mais 20 litros:");
porsche.abastece(20);
console.log(porsche.toString());

console.log("Resolvi encher o tanque:");
porsche.completaTanque();
console.log(porsche.toString());

console.log("Tentei colocar mais 10 litros:");
porsche.abastece(10)
console.log(porsche.toString());