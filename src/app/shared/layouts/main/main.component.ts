import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public showHome = true;

  public toggleView(state: boolean)
  {
    this.showHome = state
  }
}
