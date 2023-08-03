import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPokemonComponent } from './listagem-pokemon.component';

describe('ListagemPokemonComponent', () => {
  let component: ListagemPokemonComponent;
  let fixture: ComponentFixture<ListagemPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemPokemonComponent]
    });
    fixture = TestBed.createComponent(ListagemPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
