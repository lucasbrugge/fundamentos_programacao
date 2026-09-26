import teclado from "npm:readline-sync";

let qtdBarras: number = 0;
let perimetro:number = 0;
const BARRAS: number = 2.7;

console.log("De o valor do Perimentro: ");
perimetro = teclado.questionInt();

perimetro = perimetro * 1.10;

qtdBarras = Math.ceil(perimetro / BARRAS);

console.log("Quantidade de barras: ", qtdBarras);
