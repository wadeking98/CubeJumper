import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-obstacle',
  templateUrl: './obstacle.component.html',
  styleUrls: ['./obstacle.component.css'],
  
})
export class ObstacleComponent implements OnInit {
  @Input() fps:number;
  heighthigh = 45;
  heightlow = 10;
  widthhigh=25;
  widthlow=5;
  width = this.genWidth();
  height = this.genHeight();
  posinit = this.pxToVh(window.innerWidth);
  pos= this.posinit;
  timer = 0;
  vel = -100;
  colourList = ["indigo","palevioletred","pink","maroon","coral","darksalmon","darkolivegreen","teal","cyan"]
  colour = this.colourList[Math.round(Math.random()*(this.colourList.length-1))]
  @Output() framePos = new EventEmitter<Object>();
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{this.update()},Math.round((1/this.fps)*1000))
  }

  update():void{
    this.timer += 1/this.fps
    this.pos = this.posinit + this.vel*this.timer
    this.framePos.emit({"pos":this.pos, "width":this.width, "height":this.height});
    if(this.pos <= -this.widthhigh){
      this.timer = 0;
      this.width = this.genWidth();
      this.height = this.genHeight();
      this.colour = this.colourList[Math.round(Math.random()*(this.colourList.length-1))]
    }
  }

  genHeight(){
    return Math.random()*(this.heighthigh-this.heightlow)+this.heightlow
  }

  genWidth(){
    return Math.random()*(this.widthhigh-this.widthlow)+this.widthlow
  }

  pxToVh(val:number):number{
    return (val*100/window.innerHeight);
  }
  

  onWindowResize($event){
    
  }

  

}
