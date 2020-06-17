import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, RouterLink} from '@angular/router'

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router:Router) { }

  menuItems = {
    "Play":{"func":()=>{}, "type":"btn-primary", "link":"/game"},
    "About":{"func":()=>{}, "type":"btn-secondary", "link":"/#"}
    
  }

  keys(obj:any): string[]{
    return Object.keys(obj)
  }

  ngOnInit(): void {
  }

}
