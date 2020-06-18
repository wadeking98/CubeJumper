import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})

export class PlayerComponent implements OnInit {
  @Input() jump:boolean;
  @Input() fps:number;
  @Output() jumpDone = new EventEmitter<boolean>();
  @Output() framePos = new EventEmitter<Object>();
  left = 10;
  width = 10;
  height = 10;
  pos = 0;
  velinit = 350;
  accel = -9.81*100
  timer = 0;
  colourList = ["indigo","palevioletred","pink","maroon","coral","darksalmon","darkolivegreen","teal","cyan"]
  colour = this.colourList[Math.round(Math.random()*(this.colourList.length-1))]
  constructor() { }

  ngOnInit(): void {
    this.framePos.emit({"pos":this.pos, "left":this.left, "width":this.width, "height":this.height})
    setInterval(()=>{this.update()},Math.round((1/this.fps)*1000))
  }

  update(): void{
    if(this.jump){
      this.timer+=(1/this.fps);
      this.pos = Math.max(this.velinit*this.timer + 1/2*this.accel*this.timer**2, 0);
      this.framePos.emit({"pos":this.pos, "left":this.left, "width":this.width, "height":this.height});
      if(this.pos===0){
        this.jumpDone.emit(true);
        this.timer=0;
        this.colour = this.colourList[Math.round(Math.random()*(this.colourList.length-1))]
      }
    }
  }

  
}
