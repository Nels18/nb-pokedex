import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { PreventPokemonFormLeaveGuard } from './guards/auth/prevent-pokemon-form-leave.guard';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { EvolutionsComponent } from './pages/pokemon/tabs/evolutions/evolutions.component';
import { GeneralComponent } from './pages/pokemon/tabs/general/general.component';
import { StatsComponent } from './pages/pokemon/tabs/stats/stats.component';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [PreventPokemonFormLeaveGuard],
    component: HomeComponent
  },
  {
    canActivate: [AuthGuard],
    path: 'pokemon/:name',
    component: PokemonComponent,
    children: [
      {
        path: 'general',
        component: GeneralComponent
      },
      {
        path: 'stats',
        component: StatsComponent
      },
      {
        path: 'evolutions',
        component: EvolutionsComponent
      },
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'not-found',
    component: ErrorComponent,
    data: {
      title: 'Page not found !',
      message: 'You look lost !'
    }
  },
  {
    path:'**',
    redirectTo: "not-found",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
