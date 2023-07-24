import { LoginComponent } from './../../../Lista_02/Ex_01/src/app/views/login/login.component';
import { CadastroComponent } from './../../../Lista_02/Ex_01/src/app/views/cadastro/cadastro.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
