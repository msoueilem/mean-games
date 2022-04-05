import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year:Date = new Date()
  name:String = "Maharishi International University."
  message:String = "All Rights Reserved."

  constructor() { }

  ngOnInit(): void {
  }

}
