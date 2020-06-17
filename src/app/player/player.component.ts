import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  animations: [
    trigger('jump', [
      state('ground',style({
        marginTop:'80vh'
      }),),
      state('peak', style({
        marginTop:`${80-50}vh`
      })),
      transition('ground => peak', [
        animate('0.25s ease-out')
      ]),
      transition('peak => ground', [
        animate('0.25s ease-in')
      ])
    ])
  ]
})
export class PlayerComponent implements OnInit {
  @Input() jump:boolean;
  @Output() done = new EventEmitter<string>();
  state="ground";
  constructor() { }

  ngOnInit(): void {
  }

  fall(){
    this.done.emit(this.state);
  }

  setState(jump:boolean):string{
    this.state=jump?'peak':'ground'
    return this.state;
  }

}
