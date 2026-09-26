import teclado from "npm:readline-sync";

const altura: number = Number(teclado.question("Digite a altura da piscina (m): "));
const raio: number = Number(teclado.question("Digite o raio da piscina (m): "));

const volumeM3: number = Math.PI * Math.pow(raio, 2) * altura;
const volumeLitros: number = volumeM3 * 1000;
const litrosArredondado: number = Math.ceil(volumeLitros);

console.log(`Serao necessarios ${litrosArredondado} litros de agua.`);