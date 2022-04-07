import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  _rate!:number;

  stars:number[] = []
  constructor() { }

  ngOnInit(): void {
  }
  
  @Input()
  set rate( rateNumber : number) {
    this._rate = rateNumber;
    this.stars= new Array<number>(this._rate)
  } 

}
