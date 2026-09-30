import Produto from "./Produto.ts";

let chocolate1: Produto = new Produto("Barra de chocolate Diamante Negro", 0.090, 5.99),
    chocolate2: Produto = new Produto("Ovo de Páscoa Diamante Negro", 0.176, 29.90);

console.log(chocolate1.getEtiqueta());
console.log();
console.log(chocolate2.getEtiqueta());