import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AddGameComponent } from './add-game/add-game.component';
import { GameDetailsComponent } from './edit-game/game-details/game-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'games', component: SearchComponent },
  { path: 'games/:id', component: GameDetailsComponent },
  { path: 'create', component: AddGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
