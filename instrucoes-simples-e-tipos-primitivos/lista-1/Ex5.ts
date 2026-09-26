import teclado from "npm:readline-sync";

let preco: number = 0,
    novoPreco: number = 0;

console.log("Digite o preço do produto:");
preco = teclado.questionFloat();

novoPreco = preco * 0.65;

console.log("O valor final com desconto é:");
console.log(novoPreco);
