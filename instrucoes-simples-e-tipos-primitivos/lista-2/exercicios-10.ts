import teclado from "npm:readline-sync";

const distancia: number = Number(teclado.question("Digite a distancia (km): "));
const tempo: number = Number(teclado.question("Digite o tempo transcorrido (h): "));

const velocidadeMedia: number = distancia / tempo;

console.log(`Velocidade media: ${velocidadeMedia} km/h`);