export default class Cidade {
    public constructor(
        private nome: string,
        private area: number,
        private populacao: number
    ){}

    public densidade(): number {
        return this.populacao / this.area;
    }
    public getNome(): string {
        return this.nome;
    }
}
