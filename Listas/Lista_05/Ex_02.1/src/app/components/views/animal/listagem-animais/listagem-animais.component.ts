import { Animal } from 'src/app/model/animal';
import { AnimalService } from './../../../../service/animal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-animais',
  templateUrl: './listagem-animais.component.html',
  styleUrls: ['./listagem-animais.component.css']
})
export class ListagemAnimaisComponent implements OnInit {

  constructor(private animalService: AnimalService){ }

  public animias!: Animal[];

  ngOnInit(): void {
    this.animalService.getAnimais().subscribe((res: Animal[]) =>{
      this.animias = res
    })
  }

}
