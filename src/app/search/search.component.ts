import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  game = {
    Id: 0,
    gameName: '',
    gameDescription: '',
    gamePhotoUrl: '',
    price: 0,
   
  };
  games:any; 
  currentGame: any; 
  currentIndex:Number = -1;
  name = '';
  currentid:Number= 0;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.readGames();
  }

  readGames(): void {
    this.gameService.readAll().subscribe(
      (games) => {
        this.games = games;
        console.log(games);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refresh(): void {
    this.readGames();
    this.currentGame = null;
    this.currentIndex = -1;
  }

  setCurrentGame(game:any, index:Number): void {
    this.currentGame = game;
    this.currentid = game.id;
    this.currentIndex = index;
  }

  deleteAllGames(): void {
    this.gameService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.readGames();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchByName(): void {
    this.gameService.searchByName(this.currentGame?.gameName).subscribe(
      (games) => {
        this.games = games;
        console.log(games);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
