import teclado from "npm:readline-sync";
import Dosador from "./Dosador.ts";

let peso: number = 0;

console.log("Digite o peso em kg:");
peso = teclado.questionFloat();

let dosador: Dosador = new Dosador(peso);

console.log("Dosagem:", dosador.getDosagem(), "ml");

// Faça os testes abaixo:
// console.log(dosador.toString());
// console.log(dosador);