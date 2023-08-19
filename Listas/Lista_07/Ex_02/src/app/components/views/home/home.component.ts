import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit{

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

