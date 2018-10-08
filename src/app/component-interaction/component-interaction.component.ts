import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input('parentName') name;
  @Output() childData = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  injectEvent() {
    this.childData.emit("This message came from child component");
  }

}
