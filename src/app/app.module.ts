import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from'@angular/platform-browser/animations'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameWindowComponent } from './game-window/game-window.component';
import { PlayerComponent } from './player/player.component';
import { ObstacleComponent } from './obstacle/obstacle.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GameWindowComponent,
    PlayerComponent,
    ObstacleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
