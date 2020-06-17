import { Component, OnInit, Input, Output } from '@angular/core';
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
  
  animations:[
    trigger('move', [
      state('void',style({
        left:`${window.innerWidth}px`
      })),
      state('done',style({
        left:"-10vh"
      })),
      transition('void => done', [
        animate('1s')
      ]),
      transition('done => void', [
        animate('0s')
      ])
    ])
  ]
})
export class ObstacleComponent implements OnInit {
  heighthigh = 45;
  heightlow = 5;
  widthhigh=15;
  widthlow=5;
  height = 0;
  width = 0;
  pos:string = '0px';
  state = 'done';
  constructor() { }

  ngOnInit(): void {
  }

  doneHandler($event){
    if($event.fromState === 'void'){
      this.moveDone();
    }else if($event.fromState === 'done'){
      this.resetDone();
    }
  }

  genHeight(){
    this.height = Math.random()*(this.heighthigh-this.heightlow)+this.heightlow
  }

  genWidth(){
    this.width = Math.random()*(this.widthhigh-this.widthlow)+this.widthlow
  }

  moveDone(){
    this.state='void'
  }

  resetDone(){
    this.genHeight();
    this.genWidth();
    this.state='done'
  }

  onWindowResize($event){
    
  }

  

}
