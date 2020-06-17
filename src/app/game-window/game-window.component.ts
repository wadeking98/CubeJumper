import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css'],
  
})
export class GameWindowComponent implements OnInit {
  
  jumpVel = 5;
  jump = false;
  constructor() { }
  state = 'ground';
  obst = 'done';

  ngOnInit(): void {
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event:KeyboardEvent){
    //listen for space bar
    if(event.keyCode===32){
      if(this.state==='ground'){
        this.jump = true;
      }
    }
  }

  //reset jump after the animation
  onDone(state:string){
    this.state = state;
    if(state==='peak'){
      this.jump = false;
    }
  }

  onAnimDone(){
    this.obst = 'void'
  }

  test(){
    alert("test");
  }

  

}
