import Pessoa from "./Pessoa.ts";

let homemDeFerro: Pessoa = new Pessoa("Tony Stark");

console.log("Cumprimentando alguém que eu não conheço:");
console.log(homemDeFerro.cumprimenta());

console.log("Cumprimentando alguém que eu sei o nome:");
console.log(homemDeFerro.cumprimentaPeloNome("Thanos"));

let capitaoAmerica : Pessoa = new Pessoa("Steve Rogers");

console.log("Cumprimentando alguèm que eu conheço:");
console.log(homemDeFerro.cumprimentaPessoa(capitaoAmerica));