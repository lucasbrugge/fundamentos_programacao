import Produto from "./Produto.ts";

let guitarra: Produto = new Produto();

console.log("Descrição:", guitarra.getDescricao());
console.log("Valor:", guitarra.getValor());

guitarra.setDescricao("Guitarra gibson SG Strandard Heritage Cherry");
guitarra.setValor(1799);

console.log();
console.log("Descrição:", guitarra.getDescricao());
console.log("Valor:", guitarra.getValor());

guitarra.setValor(-1000);

console.log();
console.log("Descrição:", guitarra.getDescricao());
console.log("Valor:", guitarra.getValor());