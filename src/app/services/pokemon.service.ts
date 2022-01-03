import { Injectable } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: string[] = [];

  constructor(private loggingService: LoggingService) { }

  addPokemon(pokemonName: string) {
    this.pokemons.push(pokemonName);
    this.loggingService.logItemCreated(pokemonName);
  }

  removePokemon(pokemonName: string) {
    this.pokemons.splice(this.pokemons.indexOf(pokemonName), 1);
    this.loggingService.logItemRemoved(pokemonName);
  }
}
