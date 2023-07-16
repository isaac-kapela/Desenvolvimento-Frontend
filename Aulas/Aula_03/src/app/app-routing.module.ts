import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CadastroComponent } from './components/views/cadastro/cadastro.component';
import { LoginComponent } from './components/views/login/login.component';
import { ContatosComponent } from './components/views/contatos/contatos.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'cadastro',component: CadastroComponent},
  {path:'login', component: LoginComponent},
  {path:'contatto',component: ContatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
