import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './mock-players';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private playersUrl = 'api/players';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageSerivce: MessageService) { }

  getPlayers(): Observable<Player[]>{

    return this.http.get<Player[]>(this.playersUrl)
      .pipe(
        // if error
        catchError(this.handleError('getPlayers', []))
      )
  }


  getPlayer(id: number): Observable<Player>{

    const url = `${this.playersUrl}/${id}`;
    return this.http.get<Player>(url).pipe(
      tap(_ => this.log(`fetched player id=${id}`)),   // <------------- use message service
      catchError(this.handleError<Player>(`getPlayer id=${id}`))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

private log(message: string) {
  this.messageSerivce.add(`HeroService: ${message}`);
}

}
