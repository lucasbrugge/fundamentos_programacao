import Produto from "./Produto.ts";

let guitarra: Produto = new Produto("Fender Strandard Telecaster Olympic White", 699);

console.log("Descrição:", guitarra.getDescricao());
console.log("Valor:", guitarra.getValor());

guitarra.setDescricao("Guitarra gibson SG Strandard Heritage Cherry");
guitarra.setValor(1799);

console.log();
console.log("Descrição:", guitarra.getDescricao());
console.log("Valor:", guitarra.getValor());
console.log("Valor com desconto:", guitarra.calculaComDesconto());
console.log("Valor da parcela:", guitarra.calculaParcela(4));

let celular: Produto = new Produto("Realme C63", 670);

console.log();
console.log("Descrição:", celular.getDescricao());
console.log("Valor:", celular.getValor());
console.log("Valor com desconto:", celular.calculaComDesconto());
console.log("Valor da parcela:", celular.calculaParcela(4));