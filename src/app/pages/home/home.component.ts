import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guards/auth/prevent-pokemon-form-leave.guard';
import { AuthService } from 'src/app/services/auth.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, CanComponentDeactivate {

  constructor(
    public authService: AuthService,
    public pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
  }

  canDeactivate(): boolean | Observable <boolean> | Promise<boolean> {
    if (!this.pokemonService.isEditingPokemon) return true;
    return confirm("Vous voulez vraiment quitter la page sans finir la création du pokémon ?");
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
