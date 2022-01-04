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

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {
    this.pokemons = this.pokemonService.pokemons;
  }

  ngOnInit(): void {
  }

  addPokemon() {
    if (!this.pokemonName) return;
    this.pokemonAdded = true;
    this.pokemonService.addPokemon(this.pokemonName);
    this.pokemonName = '';
  }

  goToPokemonPage(name: string) {
    this.router.navigate([`/pokemon/${name}`]);
  }

}
