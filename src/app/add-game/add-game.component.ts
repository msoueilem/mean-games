import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {


  addGameForm!: FormGroup
  route: any;
  constructor(private gamebuilder:FormBuilder, private gameService:GamesDataService) {
    this.addGameForm = this.gamebuilder.group({
      title: "",
      rate: 0,
      year: 0,
      price: 0,
      minPlayers: 0,
      maxPlayers: 0,
      minAge: 0
    })
   }

  ngOnInit(): void {
  }

  addGame():void{
    console.log("Add game submited");
    console.log(this.addGameForm.value);
    const game = {
      _id: "",
      title: this.addGameForm.value.title,
      rate: this.addGameForm.value.rate,
      year: this.addGameForm.value.year,
      price: this.addGameForm.value.price,
      minPlayers: this.addGameForm.value.minPlayers,
      maxPlayers: this.addGameForm.value.maxPlayers,
      minAge: this.addGameForm.value.minAge,
    }
    console.log(game);
    
    this.gameService.addOne(game).subscribe(
      {
        next: () => {
          this.route.navigate(["games"])
        },
        error: err => console.log("Service Error:", err),
        complete: () => {
          console.log("Game added")
        }
      }
    )
  }

}
