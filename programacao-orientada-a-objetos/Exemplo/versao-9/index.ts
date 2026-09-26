import Produto from "./Produto.ts";

let guitarra: Produto = new Produto();

console.log("Descrição:", guitarra.getDescricao());
console.log("Valor:", guitarra.getValor());

guitarra.setDescricao("Guitarra gibson SG Strandard Heritage Cherry");
guitarra.setValor(1799);

console.log();
console.log("Descrição:", guitarra.getDescricao());
console.log("Valor:", guitarra.getValor());
console.log("Valor com desconto:", guitarra.calculaComDesconto());
console.log("Valor da parcela:", guitarra.calculaParcela(4));