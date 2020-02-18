import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/game';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  gamesForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  });

  id: string;
  game: any;

  constructor(private gamesService: GamesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.gamesService.getGame(this.id).subscribe(
        res => {
          this.game = res;
        },
        err => console.log(err)
      );
      setTimeout(() => {
        this.gamesForm.patchValue({
          title: this.game.title,
          description: this.game.description,
          image: this.game.image
        });
      }, 500);
    }
  }

  sendGame() {
    if (this.id === null) {
      this.gamesService.saveGame(this.gamesForm.value).subscribe(() => {
        console.log('guardado');
        this.router.navigate(['/games']);
      }, (err) => {
        console.log('no se guardo');
      });
    } else {
      this.gamesService.updateGame(this.gamesForm.value, this.id).subscribe(() => {
        console.log('editado');
        this.router.navigate(['/games']);
      }, (err) => {
        console.log('no se guardo');
      });
    }
  }

}
