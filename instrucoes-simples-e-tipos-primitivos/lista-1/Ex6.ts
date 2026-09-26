import teclado from "npm:readline-sync";

let salario: number = 0,
    novoSalario: number = 0;

console.log("digite o salario a receber reajuste:");
salario = teclado.questionFloat();

novoSalario = salario * 1.125;

console.log("salario com reajuste de 12.5%");
console.log(novoSalario);