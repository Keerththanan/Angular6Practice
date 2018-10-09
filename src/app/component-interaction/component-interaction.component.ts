import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input('parentName') name;
  @Output() childData = new EventEmitter();
  childMessage="";

  constructor() { }

  ngOnInit() {
  }

  injectEvent() {
    this.childData.emit(this.childMessage);
  }

}
