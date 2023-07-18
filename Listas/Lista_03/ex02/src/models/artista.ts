    export class Artista{
  nome:string;
  anoDeNascimento: string;
  idade: number;
  genero: string;
  musicaMaisPopular: string;



  constructor(nome: string,
              anoDeNascimento:string,
              idade: number,
              genero: string,
              musicaMaisPopular: string)

{
  this.nome = nome;
  this.anoDeNascimento = anoDeNascimento;
  this.idade = idade;
  this.genero = genero;
  this.musicaMaisPopular = musicaMaisPopular;
}

}


