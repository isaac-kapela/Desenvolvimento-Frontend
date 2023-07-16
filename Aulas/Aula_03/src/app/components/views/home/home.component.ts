import { AnimalService } from 'src/app/services/animais.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private AnimalService: AnimalService){ }

    public animais!: Animal[];


  
  ngOnInit(): void {
   this.AnimalService.GetAnimais().subscribe((response) => {
    console.log(this.animais)
    this.animais = response
    console.log(this.animais)
   })
  }

}
