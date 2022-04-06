import { Injectable } from '@angular/core';
import { Game } from './games/games.component'; 

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  constructor() {
    
    }
    getGames(): Array<Game>
    {
      let games = new Array<Game>(2)
      games[0] = new Game("1","Catan",39.00)
      games[1] = new Game("2","King of you",39.00)
    return games
    }
}
