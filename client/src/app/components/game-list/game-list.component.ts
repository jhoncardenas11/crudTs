import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: any = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err)
    );
  }

}
