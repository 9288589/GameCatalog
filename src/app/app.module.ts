import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { GameService } from './services/game.service';
import { AddGameComponent } from './add-game/add-game.component';
import { GameDetailsComponent } from './edit-game/game-details/game-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddGameComponent,
    GameDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
