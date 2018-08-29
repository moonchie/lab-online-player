import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Player } from '../player';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  players: Player[] = [];


  constructor(private playerService: HeroService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers()
    .subscribe(players => this.players = players.slice(1, 5));
  }

}
