export default class Produto {
    descricao: string; // atributo
    valor: number; // atributo

    // Cuidado! isso fere o encapsulamento!!!

    // construtor inicializa meu objeto
    public constructor () {
        this.descricao = "Descrição de exemplo";
        this.valor = 0;
    }
} 