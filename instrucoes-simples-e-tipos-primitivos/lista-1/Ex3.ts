import teclado from	"npm:readline-sync";

let horasAulas:number = 0,
    horas:number = 0;

console.log("Digite a carga-horária do curso (em horas-aulas):");
horasAulas = teclado.questionFloat();

horas = (horasAulas*50) / 60;

console.log("A carga-horária do curso em horas-relógio é:")
console.log(horas);