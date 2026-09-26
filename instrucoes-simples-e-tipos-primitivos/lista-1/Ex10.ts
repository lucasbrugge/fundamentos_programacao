import teclado from "npm:readline-sync";

let conta: number = 0,
    d1: number = 0,  
    d2: number = 0,
    d3: number = 0,
    d4: number = 0,
    d5: number = 0,
    d6: number = 0,
    resto : number,
    soma: number = 0,
    verificador: number = 0;

console.log("Digite o número da conta corrente:");
conta = teclado.questionInt();

d1 = Math.trunc(conta / 100000);
resto = conta % 100000;

d2 = Math.trunc(resto / 10000);
resto = conta % 10000;

d3 = Math.trunc(resto / 1000);
resto = conta % 1000;

d4 = Math.trunc(resto / 100);
resto = conta % 100;

d5 = Math.trunc(resto / 10);
resto = conta % 10;

d6 = resto;   // A variável D6 poderia ser suprimida.

/*
 Como saber se os dígitos foram separados corretamente?
 console.log(d1);
 console.log(d2);
 console.log(d3);
 console.log(d4);
 console.log(d5);
 console.log(d6);
*/ 

soma = d1 + d2*2 + d3*3 + d4*4 + d5*5 + d6*6;

resto = soma % 10;

verificador = 10 - resto;

console.log();
console.log("O dígito verificador da conta é:");
console.log(verificador);