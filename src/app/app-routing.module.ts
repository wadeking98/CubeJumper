import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameWindowComponent } from './game-window/game-window.component';


const routes: Routes = [
  {path:'',component:MainMenuComponent},
  {path:'game', component:GameWindowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
