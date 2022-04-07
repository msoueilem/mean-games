import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.css']
})
export class DeleteGameComponent implements OnInit {
  
  @Input()
  gameId:string = ""

  constructor(private gamesData:GamesDataService, private route:Router) { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log("deleting game with id ",this.gameId)
    this.gamesData.deleteOne(this.gameId).subscribe(() =>{
      this.gamesData.getGames()
      this.route.navigate(["games"])
    })
  }
}
