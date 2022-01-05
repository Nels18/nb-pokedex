import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Pokemon } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://nb-pokedex-default-rtdb.europe-west1.firebasedatabase.app';

  constructor( private http: HttpClient ) { }

  postPokemonToApi(name: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/pokemons.json`, { name });
  }

  deletePokemon(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/pokemons/${id}.json`);
  }

  getPokemons(): Observable<Pokemon[]> {
    let pokemons: Pokemon[] = [];
    return this.http.get(`${this.apiUrl}/pokemons.json`).pipe(
      map((pokemonsObject) => {
        Object.entries(pokemonsObject).forEach(([key, pokemon]) => {
          pokemons.push({
            ...pokemon,
            id: key,
          });
        });
        return pokemons;
      })
    );
  }
}
