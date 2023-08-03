import { ListagemAnimaisComponent } from './components/views/animal/listagem-animais/listagem-animais.component';
import { AdicionarAnimalComponent } from './components/views/animal/adicionar-animal/adicionar-animal.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path: "adicionar-animal",component: AdicionarAnimalComponent},
  {path:"listagem-animais",component: ListagemAnimaisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
