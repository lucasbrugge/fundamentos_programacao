export default class Relogio{
    
    public graus(hor: number, min: number): string { 
        return `O ponteiro de hora está em ${this.horasParaGraus(hor, min)}° graus e o de minutos em ${this.minParaGraus(min)}°`; 
    }

    public horasParaGraus(hor:number, min:number): number{
        return (30 * (hor % 12)) + (0.5 * min);
    }
    
    public minParaGraus(min:number): number{
        return 6 * min;
    }
}
