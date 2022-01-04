import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { FormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GeneralComponent } from './pages/pokemon/tabs/general/general.component';
import { EvolutionsComponent } from './pages/pokemon/tabs/evolutions/evolutions.component';
import { StatsComponent } from './pages/pokemon/tabs/stats/stats.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonItemComponent,
    BasicHighlightDirective,
    HomeComponent,
    PokemonComponent,
    GeneralComponent,
    EvolutionsComponent,
    StatsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
