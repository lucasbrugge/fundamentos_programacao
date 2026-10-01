export default class Dado {
    private readonly faces:number;
    private rolagem:number;

    public constructor(faces:number){
        this.faces = faces
        this.rolagem = this.rolar();
    }

    public rolar(): number{
        this.rolagem = Math.floor(Math.random() * this.faces) + 1;
        return this.rolagem; 
    }

    public getRolagem(): number{
        return this.rolagem
    }
}