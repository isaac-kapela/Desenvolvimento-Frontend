import { AdicionarAnimalComponent } from './components/views/adicionar-animal/adicionar-animal.component';
import { HomeComponent } from './../../../Lista_05/Ex_05/src/app/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'adicionar-animal', component: AdicionarAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
