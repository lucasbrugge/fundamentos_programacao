export default class Produto {
    // private da erro de compilação mas não de execução.
    private descricao: string; // atributo
    private valor: number; // atributo

    // Cuidado! isso fere o encapsulamento!!!

    // construtor inicializa meu objeto
    public constructor () {
        this.descricao = "Descrição de exemplo";
        this.valor = 0;
    }
}