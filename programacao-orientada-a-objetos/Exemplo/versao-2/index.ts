import Produto from "./Produto.ts";

let guitarra: Produto = new Produto();
 
console.log("Descrição:", guitarra.descricao);
console.log("Valor:", guitarra.valor);

// Cuidado! isso fere o encapsulamento!!!
guitarra.descricao = "Guitarra gibson SG Strandard Heritage Cherry";
guitarra.valor = 1799;

console.log();
console.log("Descrição:", guitarra.descricao);
console.log("Valor:", guitarra.valor);
