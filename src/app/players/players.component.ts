import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Player } from '../player';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {

  // selectedPlayer: Player;

  players = [];


  constructor(private playerService: HeroService) {}

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers()
    .subscribe(players => this.players = players);
  }

  // onSelect(player: Player): void {
  //   this.selectedPlayer = player;
  // }
}

