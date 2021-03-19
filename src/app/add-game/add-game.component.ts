import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
})
export class AddGameComponent implements OnInit {
  game = {
    Id: 0,
    gameName: '',
    gameDescription: '',
    gamePhotoUrl: '',
    price: 0,
  };
  submitted = false;
  //nameGame:string = '';
  //gameDescription:string = '';
  //gamePhotoUrl:string = '';
  //price = 0;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {}

  createGame(): void {
    const data = {
      ID: this.game.Id,
      gameName: this.game.gameName,
      gameDescription: this.game.gameDescription,
      gamePhotoUrl: this.game.gamePhotoUrl,
      price: this.game.price,
    };

    this.gameService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newGame(): void {
    this.submitted = false;
    this.game = {
      Id: this.game.Id || 0,
      gameName: this.game.gameName || '',
      gameDescription: this.game.gameDescription || '',
      gamePhotoUrl: this.game.gamePhotoUrl || '',
      price: this.game.price || 0,
    };
  }
}
