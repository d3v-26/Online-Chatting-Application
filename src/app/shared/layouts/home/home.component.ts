import { AfterViewInit, Component, OnInit } from '@angular/core';
import 'jarallax'
declare var jarallax: any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    var ele = document.querySelectorAll(".jarallax"); 
    jarallax(ele);
  }

  ngOnInit(): void {
  }

}
