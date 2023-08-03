
export class Animal{
  public _id!: number;
  public nome: string;
  public raca: string;
  public peso: number;
  public img: string;
  

  constructor(nome: string, raca: string, peso: number, img: string){
    this.nome = nome;
    this.raca = raca;
    this.peso = peso;
    this.img = img;
  }
}

