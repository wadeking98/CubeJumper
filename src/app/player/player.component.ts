import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})

export class PlayerComponent implements OnInit {
  @Input() jump:boolean;
  @Input() fps:number;
  @Input() playerPowerups:Object;
  @Input() dbjump:boolean;
  @Input() pulse:boolean;
  @Output() pulseDone = new EventEmitter<boolean>();
  @Output() jumpDone = new EventEmitter<boolean>();
  @Output() framePos = new EventEmitter<Object>();
  pulseInterval;
  opacity = 1;
  left = 10;
  width = 10;
  height = 10;
  pos = 0;
  velinit = 350;
  vel = 0;
  accel = -9.81*100
  timer = 0;
  colourList = ["indigo","palevioletred","pink","maroon","coral","darksalmon","darkolivegreen","teal","cyan"]
  colour = this.colourList[Math.round(Math.random()*(this.colourList.length-1))]
  constructor() { }

  ngOnInit(): void {
    this.framePos.emit({"pos":this.pos, "left":this.left, "width":this.width, "height":this.height})
    setInterval(()=>{this.update()},Math.round((1/this.fps)*1000))
  }

  canUsePowerup(pwr:string, pwrflag:boolean){
    return pwrflag && pwr in this.playerPowerups && this.playerPowerups[pwr]["uses"]>0
  }

  update(): void{
    if(this.canUsePowerup("pulse",this.pulse)){
      this.pulseInterval = setInterval(()=>{this.opacity = this.opacity === 1? 0:1},150)
      this.playerPowerups["pulse"]["uses"] --;
      this.pulse = false
      setTimeout(() => {
        clearInterval(this.pulseInterval);
        this.opacity = 1;
        this.pulseDone.emit(true);
      }, 5000);
    }
    if(this.jump){
      if(this.pos === 0 && this.timer === 0){//start of jump
        this.vel=this.velinit;
      }
      //double jump functionality
      if(this.canUsePowerup("db jump", this.dbjump)){
        this.vel = this.velinit;
        this.playerPowerups["db jump"]["uses"] --;
        this.dbjump = false;
      }
      //update timer
      this.timer+=(1/this.fps);

      //update vel
      this.vel += this.accel/this.fps;

      //update pos
      this.pos += this.vel/this.fps

      this.pos = Math.max(this.pos, 0);
      this.framePos.emit({"pos":this.pos, "left":this.left, "width":this.width, "height":this.height});

      if(this.pos===0 && this.timer!==0){//end of jump
        //console.log(this.playerPowerups);
        this.jumpDone.emit(true);
        this.timer=0;
        this.colour = this.colourList[Math.round(Math.random()*(this.colourList.length-1))]
        this.vel = 0;
      }
    }
  }

  
}
