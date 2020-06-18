import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css'],
  
})
export class GameWindowComponent implements OnInit {
  
  objPos:object;
  playerPos:object;
  jump = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event:KeyboardEvent){
    //listen for space bar
    if(event.keyCode===32){
      this.jump = true;
    }
  }

  detectCollision(){
    //console.log(this.objPos["pos"])
    //console.log(this.playerPos["left"])
    let pxi = this.playerPos["left"];
    let pxf = pxi+this.playerPos["width"];
    let oxi = this.objPos["pos"];
    let oxf = oxi+this.objPos["width"];

    let pyi = this.playerPos["pos"];
    let pyf = pyi+this.playerPos["height"];
    let oyi = 0;
    let oyf = oyi+this.objPos["height"];
    if(this.intersect(pxi,pxf,oxi,oxf) && this.intersect(pyi,pyf,oyi,oyf)){
      this.router.navigateByUrl("/game-over");
    }
    
  }

  intersect(n:number, m:number, a:number, b:number){
    return this.between(n,a,b) || this.between(m, a,b) || this.between(a,n,m) || this.between(b,n,m);
  }

  between(n:number, a:number, b:number){
    return (n-a)*(n-b)<=0
  }

  getObjPos($event){
    this.objPos = $event;
    this.detectCollision()
  }

  getPlayerPos($event){
    this.playerPos = $event;
  }

  resetJump(){
    this.jump = false;
  }

  
  

}
