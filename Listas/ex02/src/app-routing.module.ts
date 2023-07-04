import { Component, NgModule } from '@angular/core';
import { FuncionarioComponent } from './app/views/funcionario/funcionario.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/views/login/login.component';
import { CadastroComponent } from './app/views/cadastro/cadastro.component';

const routes: Routes =[
  {path:"",component: FuncionarioComponent},
  {path:'login',component:LoginComponent },
  {path: 'cadastro',component: CadastroComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule{}

