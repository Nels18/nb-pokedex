import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pokemon, PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  pokemonName: string | undefined;
  nextPokemonName: string | undefined;
  previousPokemonName: string | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.pokemonName = params["name"];
      this.pokemon = {
        id: this.pokemonService.findPokemonIndex(this.pokemonName!),
        name: this.pokemonName!
      };
      this.nextPokemonName = this.pokemonService.getNextPokemonName(this.pokemonName);
      this.previousPokemonName = this.pokemonService.getPreviousPokemonName(this.pokemonName);
    })
  }

  goToNextPokemon() {
    if (!this.nextPokemonName) return;
    this.router.navigate(['/pokemon', this.nextPokemonName]);
  }

  goToPreviousPokemon() {
    if (!this.previousPokemonName) return;
    this.router.navigate(['/pokemon', this.previousPokemonName]);
  }
}
