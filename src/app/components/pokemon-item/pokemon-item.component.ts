import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input('pokemonName') name: string | undefined = '';
  @Output() deleteClick = new EventEmitter<string>();
  
  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
  }

  onDeleteClick() {
    this.pokemonService.removePokemon(this.name!);
  }
}
