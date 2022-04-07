import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  x:number = 3;
  y:number = 4;
  @Input()
  z:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  updateZ(message:number):void{
    this.z = message
  }

}
