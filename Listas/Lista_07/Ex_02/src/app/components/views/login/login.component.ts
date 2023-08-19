import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email!:string;
  public senha!:string;
  public Registar!:string;

    public LimparEmail(){
      this.email = ''

    }

    public LimparSenha(){
      this.email = ''

    }


}
