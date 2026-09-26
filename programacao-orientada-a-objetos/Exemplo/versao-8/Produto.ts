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

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public setValor(valor: number): void {
        this.valor = Math.abs(valor);
    }

    public getDescricao(): string {
        return this.descricao;
    }
 
    public getValor(): number {
        return this.valor;
    }

    public calculaComDesconto():number {
        return  this.valor * 0.95;
    }

}