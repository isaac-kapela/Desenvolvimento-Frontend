import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-listagem-pokemon',
  templateUrl: './listagem-pokemon.component.html',
  styleUrls: ['./listagem-pokemon.component.css']
})
export class ListagemPokemonComponent implements OnInit {

  public pokemons: any[] = [];


  constructor (private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((res: any) =>{
      console.log(res.results)
      for(let pokemon of res.results){
        this.pokemonService.getInfoPokemon(pokemon.name).subscribe((res: any) =>{
          this.pokemons.push(res)
          console.log(res)

        })
      }
    })
  }

}
