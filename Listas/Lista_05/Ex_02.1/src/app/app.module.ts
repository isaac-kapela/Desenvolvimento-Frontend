import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { ListagemAnimaisComponent } from './components/views/animal/listagem-animais/listagem-animais.component';
import { AdicionarAnimalComponent } from './components/views/animal/adicionar-animal/adicionar-animal.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SobreNosComponent } from './components/views/animal/sobre-nos/sobre-nos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListagemAnimaisComponent,
    AdicionarAnimalComponent,
    NavbarComponent,
    SobreNosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
