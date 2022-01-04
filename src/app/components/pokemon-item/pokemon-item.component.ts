import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
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
    private loggingService: LoggingService,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
  }

  onDeleteClick() {
    this.pokemonService.removePokemon(this.name!);
    this.loggingService.logItemRemoved(this.name!);
  }
}
