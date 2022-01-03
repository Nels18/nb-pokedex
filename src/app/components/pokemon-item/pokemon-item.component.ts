import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input('pokemonName') name: string | undefined = '';
  @Output() deleteClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick() {
    this.deleteClick.emit(this.name)
    console.log('deleted');
  }


}
