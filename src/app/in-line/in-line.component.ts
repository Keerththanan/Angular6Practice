import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-line',
  template: `
    <div *ngIf = "x">
      Inline template
    </div>
  `,
  styles: [`
  div{
    color: red;
  }`]
})
export class InLineComponent implements OnInit {
  x = true; //show the inline template when x is true

  constructor() { }

  ngOnInit() {
  }

}
