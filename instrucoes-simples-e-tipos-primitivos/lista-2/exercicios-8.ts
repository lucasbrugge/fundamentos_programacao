import teclado from "npm:readline-sync";

const valorInvestido: number = Number(teclado.question("Digite o valor investido: "));
const taxaJuros: number = Number(teclado.question("Digite a taxa de juros mensal (%): "));
const meses: number = Number(teclado.question("Digite a quantidade de meses: "));

const taxaDecimal: number = taxaJuros / 100;
const montante: number = valorInvestido * Math.pow(1 + taxaDecimal, meses);

console.log(`Montante final: R$ ${montante.toFixed(2)}`);