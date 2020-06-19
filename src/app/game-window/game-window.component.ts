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
  pulse = false
  dbjump = false;
  score = 0;
  powerups = {
    0:{"name":"pulse","image":"pulse.ico","max":1},
    5:{"name":"db jump", "image":"dbjump.ico","max":2}
  };
  powerupRepeat = 10;
  playerPowerups = {};

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event:KeyboardEvent){
    //listen for space bar
    if(event.keyCode===32){
      if(this.jump){//dbjump
        this.dbjump = true;
      }
      this.jump = true;
    }else if(event.keyCode===90){//listen for 'z' key
      this.pulse = true;
      console.log("pulse");
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
    if(this.intersect(pxi,pxf,oxi,oxf) && this.intersect(pyi,pyf,oyi,oyf) && !this.pulse){
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
    
    if(this.score != $event["score"]){
      this.score = $event["score"]
      this.onScoreUpdate()
    }
  }

  powerupKeys(obj:any){
    return this.keys(obj).filter((item)=>obj[item]['uses']>0);
  }

  keys(obj:any): string[]{
    return Object.keys(obj)
  }

  onScoreUpdate(){
    if(this.score%this.powerupRepeat in this.powerups && this.score){
      let pwrupName = this.powerups[this.score%this.powerupRepeat]["name"]
      let pwrupImg = this.powerups[this.score%this.powerupRepeat]["image"]
      let max = this.powerups[this.score%this.powerupRepeat]["max"]
      //increment powerup if player already has it
      if(pwrupName in this.playerPowerups && this.playerPowerups[pwrupName]["uses"] < max){
        this.playerPowerups[pwrupName]["uses"]++;
      }else{//add powerup if not exist
        this.playerPowerups[pwrupName] = {"uses":1, "image":pwrupImg};
      }
    }
    
  }

  getPlayerPos($event){
    this.playerPos = $event;
  }

  resetJump(){
    this.jump = false;
    this.dbjump = false;
  }

  resetPulse(){
    this.pulse = false;
  }

  
  

}
