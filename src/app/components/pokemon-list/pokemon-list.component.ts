import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
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

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private api: ApiService
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
    if (!this.pokemonService.canAddPokemon(this.pokemonName)) return;
    // this.pokemonAdded = true;
    // this.pokemonService.addPokemon(this.pokemonName);
    this.pokemonService.isEditingPokemon = false;
    this.sendPokemonToApi(this.pokemonName);
    this.pokemonName = '';
  }


  goToPokemonPage(name: string) {
    this.router.navigate([`/pokemon/${name}`]);
  }

  sendPokemonToApi(name: string) {
    this.api.postPokemonToApi(name).subscribe(() => {
      // this.toastService.show('Pokémon added', `Pokémon ${name} has been added`);
      this.fetchPokemons();
    });
  }

  fetchPokemons() {
    this.api.getPokemons().subscribe((pokemons: Pokemon[]) => {
      this.pokemons = [...pokemons];
      this.pokemonService.pokemons = this.pokemons;
    });
    console.log('fetch');

  }
}
