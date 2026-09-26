import teclado from	"npm:readline-sync";

let paginaAtual:number = 0,
    qtdPaginas:number = 0,
    percentual:number = 0;

console.log("digite a página atual:");
paginaAtual = teclado.questionFloat();

console.log("digite a quantidade total de páginas do livro:");
qtdPaginas   = teclado.questionFloat();

percentual = (paginaAtual*100) / qtdPaginas;

console.log("o percentual de leitura é:");
console.log(percentual, "%");
