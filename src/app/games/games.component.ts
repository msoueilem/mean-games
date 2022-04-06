import { Component, OnInit } from '@angular/core';
import { GamesDataService } from '../games-data.service';

export class Game{
  private _id! : String
  private title! : String
  private year! : Number
  private rate! : Number
  private price! : Number
  private minPlayers! : Number
  private maxPlayers! : Number
  private minAge! : Number
  
  // set title(title:String){this.title=title} 
  constructor(_id: String, title : String,price : Number,){
    this._id = _id 
    this.title =  title
    this.price = price
  }
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  // let games:Game=  new Game("1","Catan",35)
  games!: Game[]

  constructor(private gamesService:GamesDataService) {
    
    // this.games = new Array<Game>(2)
    // this.games[0] = new Game("1","Catan",39.00)
    // this.games[1] = new Game("2","King of you",39.00)
    
  }

  ngOnInit(): void {
    this.games = this.gamesService.getGames()
  }

}
