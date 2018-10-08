import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  colors = ["red", "blue", "green", "yellow"];

  testArray = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
  count = 0;
  i = 0;
  constructor() { }

  ngOnInit() {
  }

}
