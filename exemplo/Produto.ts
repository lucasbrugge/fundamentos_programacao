export default class Produto {
  private descricao: string;
  private peso: number;
  private preco: number;

  public constructor(descricao: string, peso: number, preco: number) {
    this.descricao = descricao;
    this.peso = peso;
    this.preco = preco;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }

  public getPeso(): number {
    return this.peso;
  }

  public setPeso(peso: number): void {
    this.peso = peso;
  }

  public getPreco(): number {
    return this.preco;
  }

  public setPreco(preco: number): void {
    this.preco = preco;
  }

  public getPrecoQuilo(): number {
    return (this.preco / this.peso);
  }

  public geraEtiqueta(): string {
    return "- - -\n" +
      this.descricao + "\n" +
      "Peso: " + this.peso.toFixed(3) + " kg\n" +
      "Preço: R$ " + this.preco.toFixed(2) + "\n" +
      "Preço do quilo: R$ " + this.getPrecoQuilo().toFixed(2) + "\n" +
      "- - -\n";
  }
}