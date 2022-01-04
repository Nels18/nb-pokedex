import { Injectable } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

export interface Pokemon {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[] = [];

  constructor(private loggingService: LoggingService) { }

  findPokemonIndex(pokemonName: string): number {
    return this.pokemons.findIndex((pokemon) => pokemon.name === pokemonName);
  }

  addPokemon(pokemonName: string) {
    if (!pokemonName) return;
    this.pokemons.push(
      {
        id: this.pokemons.length,
        name: pokemonName
      }
    );
    this.loggingService.logItemCreated(pokemonName);
  }

  removePokemon(pokemonName: string) {
    this.pokemons.splice(this.findPokemonIndex(pokemonName), 1);
    this.loggingService.logItemRemoved(pokemonName);
  }

  getNextPokemonName(currentPokemonName: string | undefined) {
    if (!currentPokemonName) throw new Error('Can\'t find Pokemon');
    const pokemonIndex = this.pokemons.findIndex((pokemon) => pokemon.name ===currentPokemonName);
    return this.pokemons[pokemonIndex + 1]?.name;
  }

  getPreviousPokemonName(currentPokemonName: string | undefined) {
    if (!currentPokemonName) throw new Error('Can\'t find Pokemon');
    const pokemonIndex = this.pokemons.findIndex((pokemon) => pokemon.name ===currentPokemonName);
    return this.pokemons[pokemonIndex - 1]?.name;
  }
}
