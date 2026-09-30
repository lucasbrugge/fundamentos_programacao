import Produto from "./Produto.ts";

let chocolateBarra: Produto = new Produto("Barra de Chocolate Diamante Negro", 0.09, 5.99);
console.log(chocolateBarra.geraEtiqueta());

let chocolateOvo: Produto = new Produto("Ovo de Chocolate Diamante Negro", 0.176, 29.90);
console.log(chocolateOvo.geraEtiqueta()); 