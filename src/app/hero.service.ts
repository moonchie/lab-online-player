import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './mock-players';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageSerivce: MessageService) { }

  getPlayers(): Observable<Player[]>{
    // still use the mock data from the ts file
        // TODO: send the message _after_ fetching the players
    this.messageSerivce.add("I got a player service for you!");
    return of (PLAYERS);
  }
}
