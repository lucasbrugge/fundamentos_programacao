import teclado from "npm:readline-sync";

const ML_POR_PESSOA = 300;
const ML_POR_GARRAFA = 2000; //

const pessoas: number = Number(teclado.question("Digite a quantidade de pessoas: "));
const totalMl: number = pessoas * ML_POR_PESSOA;
const garrafas: number = Math.ceil(totalMl / ML_POR_GARRAFA);

console.log(`Devem ser compradas ${garrafas} garrafa(s).`);