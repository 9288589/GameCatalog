import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  currentGame: any;
  id: any;
  message = '';
  updated = false;
  game = {
    Id : 0,
    gameName: '',
    gameDescription: '',
    gamePhotoUrl: '',
    price: 0,
   };

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.id = this.route.snapshot.paramMap.get('id');
    this.getGame(this.id);
  }

  getGame(id: any): void {
    this.gameService.read(id).subscribe(
      (game) => {
        this.currentGame = game;
        console.log(game);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setAvailableStatus(status: Boolean): void {
    const data = {
      Id: this.currentGame.Id,
      gameName: this.currentGame.gameName,
      gameDescription: this.currentGame.gameDescription,
      gamePhotoUrl: this.currentGame.gamePhotoUrl,
      price: this.currentGame.price,
      
    };

    this.gameService.update(this.currentGame.id, data).subscribe(
      (response) => {
        //this.currentGame.available = status;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateGame(): void {
    this.gameService.update(this.currentGame.id, this.currentGame).subscribe(
      (response: String) => {
        console.log(response);
        this.updated = true;
        this.message = 'The game was updated!';
      },
      (error: String) => {
        console.log(error);
      }
    );
  }

  deleteGame(): void {
    this.gameService.delete(this.currentGame.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/games']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
