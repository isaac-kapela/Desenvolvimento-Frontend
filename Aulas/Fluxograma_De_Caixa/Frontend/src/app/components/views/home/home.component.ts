import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

public pagamentos!: any;  
public   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


}
