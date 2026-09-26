import teclado from "npm:readline-sync";

const anguloOriginal: number = Number(teclado.question("Digite o angulo em graus: "));

const anguloReduzido: number = anguloOriginal % 360;
const radianos: number = (anguloOriginal * Math.PI) / 180;

console.log(`(a) Angulo reduzido (< 360): ${anguloReduzido}°`);
console.log(`(b) Angulo em radianos: ${radianos.toFixed(4)} rad`);
console.log(`(c) Seno: ${Math.sin(radianos).toFixed(4)}`);
console.log(`    Cosseno: ${Math.cos(radianos).toFixed(4)}`);
console.log(`    Tangente: ${Math.tan(radianos).toFixed(4)}`);