import teclado from	"npm:readline-sync";

let ml: number = 0,
    gotas: number = 0;

console.log("Insira a quantidade em mllitros:");
ml = teclado.questionFloat();

gotas = ml * 20;

console.log("A quantidade da solução em gostas é");
console.log(gotas);