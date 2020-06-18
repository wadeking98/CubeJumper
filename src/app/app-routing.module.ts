import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameWindowComponent } from './game-window/game-window.component';
import { GameOverWindowComponent } from './game-over-window/game-over-window.component';


const routes: Routes = [
  {path:'',component:MainMenuComponent},
  {path:'game', component:GameWindowComponent},
  {path:'game-over', component:GameOverWindowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
