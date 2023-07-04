import { Component } from '@angular/core';
import Analista from 'src/app/models/analista';
import Gestor from 'src/app/models/gestor';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent {
  title = 'Ex01';
  public analistas: Analista[] = new Array<Analista>();
  public gestor: Gestor = new Gestor("Maria",499089,"Gestora de TI",[])

  constructor(){
    this.analistas.push(new Analista("Pedro", 30949,"Analista de sistemas",this.gestor.nome));
    this.analistas.push(new Analista("Maria", 98767,"Analista de banco de dados",this.gestor.nome));
    this.analistas.push(new Analista("matheus", 890867,"Analista de informatica",this.gestor.nome));
    this.analistas.push(new Analista("João", 808767,"QA",this.gestor.nome));
    this.analistas.push(new Analista("Tiago", 767069,"Analista de redes",this.gestor.nome));
    this.analistas.push(new Analista("Gustavo", 9589890,"Analista de cloud",this.gestor.nome));
    this.analistas.push(new Analista("Guilherme", 45899092,"Analista de sistemas",this.gestor.nome));

    this.gestor.nomeSubordinado = this.analistas.map(analista => analista.nome);
  }

}
