import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-over-window',
  templateUrl: './game-over-window.component.html',
  styleUrls: ['./game-over-window.component.css']
})
export class GameOverWindowComponent implements OnInit {

  constructor() { }

  menuItems = {
    "Play Again":{"func":()=>{}, "type":"btn-primary", "link":"/game"},
    "Menu":{"func":()=>{}, "type":"btn-secondary", "link":"/"}
    
  }

  keys(obj:any): string[]{
    return Object.keys(obj)
  }

  ngOnInit(): void {
  }

}
