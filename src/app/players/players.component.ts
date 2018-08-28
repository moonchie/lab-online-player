import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../mock-players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
  // import the Player schema
  players = PLAYERS;

  //Click even handler
  selectedPlayer: Player;
  onSelect(player: Player): void{
    this.selectedPlayer = player;
  }

  constructor() {}

  ngOnInit() {
  }
}

