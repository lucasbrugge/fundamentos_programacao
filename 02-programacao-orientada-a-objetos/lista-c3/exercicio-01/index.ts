// Lista C3 — Programação Orientada a Objetos
// Exercício 1
// Fonte: prog-aula-C3 - Exercícios.pdf
// Enunciado geral: ../atividade.md
//
// Orientações gerais:
// Enfoque a modelagem e consequente interação com a interface dos objetos. Nenhuma instrução de
// saída deve ser utilizada nas classes de modelagem.
//
// Modele e implemente um objeto que retorne uma cadeia de caracteres com a etiqueta eletrônica de
// um produto, contendo o valor do quilo, para ser fixada em prateleiras de um supermercado. Essa
// informação é útil a fim de que o consumidor possa comparar preços, quando as embalagens dos
// produtos possuem pesos diferentes. São atributos do produto: descrição, peso em quilos e preço.
// Exemplos de etiquetas geradas:
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Barra de Chocolate Diamante Negro
// Peso: 0,090 kg
// Preço: R$ 5,99
// Preço do quilo: R$ 66,56
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Ovo de Páscoa Diamante Negro
// Peso: 0,176 kg
// Preço: R$ 29,90
// Preço do quilo: R$ 169,89
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Lembre-se que a quebra de linha em uma cadeia de caracteres é feita por meio da sequência de
// escape "\n" no texto, assim:
// texto: string = "Pula uma linha\n";
// outroTexto: string = texto + "Pula mais duas linhas\n\n\";
// Com essa abordagem, de retornar uma cadeia de caracteres ao invés de utilizar uma instrução de
// saída, reforçam-se os princípios da Programação Orientada a Objetos. Dessa forma, ocorre a divisão
// de responsabilidades, onde a classe em questão se concentra apenas em modelar o objeto.

import Produto from "./Produto.ts";

let chocolate1: Produto = new Produto("Barra de chocolate Diamante Negro", 0.090, 5.99),
    chocolate2: Produto = new Produto("Ovo de Páscoa Diamante Negro", 0.176, 29.90);

console.log(chocolate1.getEtiqueta());
console.log();
console.log(chocolate2.getEtiqueta());