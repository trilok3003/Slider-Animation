import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations:[
    trigger("anim",[
      state("void,*",style({position:"absolute",left:0,top:0,width:"100%"})),
      transition(":enter",[
        style({transform:"translateX(-100%)"}),
        animate(".3s",style({transform:"translateX(0%)"})),
      ]),
       transition(":leave",[
         style({transform:"translateX(0%)"}),
        animate(".3s",style({transform:"translateX(100%)"})),
      ])
    ]),
    
    ]
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  panel = '1';
  show(item){
   this.panel = item;
  }
}