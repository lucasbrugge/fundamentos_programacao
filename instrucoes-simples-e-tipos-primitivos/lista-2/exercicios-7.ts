import teclado from "npm:readline-sync";

const alturaPredio: number = Number(teclado.question("Digite a altura do predio: "));
const afastamento: number = Number(teclado.question("Digite o afastamento da escada: "));

const comprimentoEscada: number = Math.hypot(alturaPredio, afastamento);

console.log(`Comprimento minimo da escada: ${comprimentoEscada.toFixed(2)}`);