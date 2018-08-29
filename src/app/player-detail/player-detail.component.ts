import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  player: Player;

  constructor(
    private route: ActivatedRoute,
    private playerService: HeroService,
    private location: Location    // location is an Angular service for interacting with the browser
  ) { }

  ngOnInit() {
    this.getPlayer();
  }

  getPlayer(): void {
    // fetch the id from the route,route.snapshot is a static image of the route information
    const id = +this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayer(id)
      .subscribe(player => this.player = player);
  }

  goBack(): void {
    this.location.back();
  }

}

