import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    GamesComponent,
    GameComponent,
    DeleteGameComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "games/game/:gameId",
        component: GameComponent
      },
      {
        path: "games",
        component: GamesComponent
      },
      {
        path: "**",
        component: ErrorPageComponent
      },
  
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
