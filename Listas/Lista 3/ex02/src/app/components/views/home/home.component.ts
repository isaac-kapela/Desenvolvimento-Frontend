
import { Component } from '@angular/core';
import { Artista } from 'src/models/artista';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title ='Ex03'
  public artista: Artista[] = new Array<Artista>();


  constructor(){
    this.artista.push(new Artista("Kendrick lamar","17/06/1987",36,"Rap","Money trees"));


  }


}
