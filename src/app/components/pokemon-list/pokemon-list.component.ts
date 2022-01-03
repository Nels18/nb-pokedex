import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  allowNewPokemon = true;
  pokemonAdded = false;
  pokemonName = '';
  pokemons: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addPokemon() {
    this.pokemonAdded = true;
    this.pokemons.push(this.pokemonName);
    console.log(this.pokemons);
    this.pokemonName = '';
  }

  removePokemon(pokemonName: string, index: number) {
    console.log('removed');
    this.pokemons.splice(index, 1);
    console.log(pokemonName, index);

  }

}
