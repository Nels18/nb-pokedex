import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon, PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @ViewChild ("nameInput") nameInputElementRef: ElementRef | undefined;
  pokemonName = "";
  pokemons: Pokemon[] = [];
  allowNewPokemon = true;
  pokemonAdded = false;
  apiUrl = 'https://nb-pokedex-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private http: HttpClient
  ) {
    this.pokemons = this.pokemonService.pokemons;
  }

  ngOnInit(): void {
    this.fetchPokemons();
  }

  onPokemonNameType() {
    this.pokemonService.isEditingPokemon = this.pokemonName !== '';
  }

  addPokemon() {
    if (!this.pokemonName) return;
    // this.pokemonAdded = true;
    this.pokemonService.addPokemon(this.pokemonName);
    this.pokemonService.isEditingPokemon = false;
    this.sendPokemonToApi(this.pokemonName);
    this.pokemonName = '';
  }

  goToPokemonPage(name: string) {
    this.router.navigate([`/pokemon/${name}`]);
  }

  sendPokemonToApi(name: string) {
    this.http.post(
      `${this.apiUrl}/pokemons.json`,
      { name }
    ).subscribe((responseData) => {
      console.log(responseData);
    });
  }

  fetchPokemons() {
    this.http.get(`${this.apiUrl}/pokemons.json`).subscribe((pokemonsObject) => {
      Object.entries(pokemonsObject).forEach(([key, pokemon]) => {
        this.pokemons.push({
          ...pokemon,
          id: key,
        });
      });
      console.log(pokemonsObject);
      console.log(this.pokemons);
    });
  }
}
