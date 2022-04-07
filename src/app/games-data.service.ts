import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './games/games.component';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  baseUrl: String = "http://localhost:4444/api"
  constructor(private http: HttpClient) { }
  
  public getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + '/games');
  }
  public getGame(gameId: String): Observable<Game> {
    return this.http.get<Game>(this.baseUrl + '/games/' + gameId);
  }
  public deleteOne(gameId:string){
    return this.http.delete<Game>(this.baseUrl + '/games/' + gameId);
  }

}
