import { Injectable } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { ApiService } from './api.service';

export interface Pokemon {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[] = [];
  isEditingPokemon = false;

  constructor(
    private loggingService: LoggingService,
    private api: ApiService
    ) { }

  findPokemonIndex(name: string): number {
    return this.pokemons.findIndex((pokemon) => pokemon.name === name);
  }

  canAddPokemon(name: string):boolean {
    if (!name) return false;
    if (this.findPokemonByName(name)) return false;
    this.loggingService.logItemCreated(name);
    return true;
  }

  findPokemonByName(name: string) {
    return this.pokemons.find(pokemon => pokemon.name === name);
  }

  findPokemonIndexByName(name: string) {
    return this.pokemons.findIndex(pokemon => pokemon.name === name);
  }

  findPokemonIdByName(name: string) {
    const pokemon = this.findPokemonByName(name);
    console.log(this.pokemons);
    return pokemon?.id;
  }

  removePokemonByName(name: string | undefined) {
    const index = this.findPokemonIndexByName(name!);
    if (!name) {
      throw new Error('Pokemon Name should be set');
    }
    console.log(name);
    const pokemonId = this.findPokemonIdByName(name);
    console.log(pokemonId);
    if (!pokemonId) return;
    this.api.deletePokemon(pokemonId).subscribe();
    this.pokemons.splice(index, 1);
    console.log(this.pokemons);
  }

  getNextPokemonName(currentPokemonName: string | undefined) {
    if (!currentPokemonName) throw new Error('Can\'t find Pokemon');
    const pokemonIndex = this.findPokemonIndexByName(currentPokemonName);
    return this.pokemons[pokemonIndex + 1]?.name;
  }

  getPreviousPokemonName(currentPokemonName: string | undefined) {
    if (!currentPokemonName) throw new Error('Can\'t find Pokemon');
    const pokemonIndex = this.findPokemonIndexByName(currentPokemonName);
    return this.pokemons[pokemonIndex - 1]?.name;
  }
}
