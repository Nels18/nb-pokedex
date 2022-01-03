import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @ViewChild ("nameInput") nameInputElementRef: ElementRef | undefined;
  pokemonName = "";
  pokemons: string[] = [];
  allowNewPokemon = true;
  pokemonAdded = false;

  constructor(private pokemonService: PokemonService) { 
    this.pokemons = this.pokemonService.pokemons;
  }

  ngOnInit(): void {
  }

  addPokemon() {
    this.pokemonAdded = true;
    this.pokemonService.addPokemon(this.pokemonName);
    this.pokemonName = '';
  }

  removePokemon(pokemonName: string, index: number) {
    console.log('removed');
    this.pokemonService.removePokemon(this.pokemonName);
  }

}
