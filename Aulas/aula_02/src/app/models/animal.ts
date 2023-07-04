export class Animal{
  id: string;
  nome:string;
  raca:string;
  peso:number;

  constructor( id:string,
                nome:string,
                raca:string,
                peso:number)

{
  this.id = id;
  this.nome = nome;
  this.raca = raca;
  this.peso = peso;
}
}

