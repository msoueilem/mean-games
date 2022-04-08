import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject } from 'rxjs';
import { Game } from './games/games.component';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  baseUrl: String = "http://localhost:4444/api"
  private _deleteOperationSuccessfulEvent$: Subject<boolean> = new Subject();
  constructor(private http: HttpClient) { }

  get deleteOperationSuccessfulEvent$(): Observable<boolean> {
    return this._deleteOperationSuccessfulEvent$.asObservable();
} 
  
  public getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + '/games');
  }

  public getGame(gameId: String): Observable<Game> {
    return this.http.get<Game>(this.baseUrl + '/games/' + gameId);
  }

  public addOne(game:any){
    return this.http.post<Game>(this.baseUrl + '/games', game).pipe(
      catchError(async () => console.log())
      )
  }
  
  public deleteOne(gameId:string){
    this._deleteOperationSuccessfulEvent$.next(true);
    return this.http.delete(this.baseUrl + '/games/' + gameId)
  }
}