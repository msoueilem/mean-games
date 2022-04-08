import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.css']
})
export class DeleteGameComponent implements OnInit {

  deleteOperationSuccessfulSubscription!: Subscription;
  @Input()
  gameId: string = ""


  constructor(private gamesData: GamesDataService, private route: Router) { }

  ngOnInit(): void {
    this.deleteOperationSuccessfulSubscription = this.gamesData.deleteOperationSuccessfulEvent$.subscribe(done=>{
      if(done==true){
        this.gamesData.getGames()
        this.route.navigate(["games"])
      }else{
        console.log('error from delete event')
      } }
    );

  }

  onClick(): void {
    console.log("deleting game with id ", this.gameId)
    this.gamesData.deleteOne(this.gameId).subscribe(
      {
        next: () => {
          this.route.navigate(["games"])
        },
        error: err => console.log("Service Error:", err),
        complete: () => {
          console.log("Game deleted",this.gameId)
        }
      }
    )
    // (() =>{
    //   this.gamesData.getGames()
    //   this.route.navigate(["games"])
    // })
  }
}
