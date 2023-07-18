import Funcionario from "./funcionario";

export default class Gestor implements Funcionario{
  nome: string;
  funcional: number;
  cargo: string;
  nomeSubordinado: string[];


  constructor(nome:string,
              funcional:number,
              cargo: string,
              nomeSubordinados: string[])

{
  this.nome = nome;
  this.funcional =funcional;
  this.cargo = cargo;
  this.nomeSubordinado = nomeSubordinados
}
}
