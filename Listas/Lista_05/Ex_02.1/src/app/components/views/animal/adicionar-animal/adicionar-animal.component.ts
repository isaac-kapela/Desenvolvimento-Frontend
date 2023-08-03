import { Component } from '@angular/core';
import { Animal } from 'src/app/model/animal';

@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent {

  public nome!: string;
  public raca!: string;
  public peso!: number;
  public img!: string;


  public adicionarAnimal(){
    let animal = new Animal(this.nome,this.raca, this.peso, this.img); 
      console.log(animal);
  }

}
