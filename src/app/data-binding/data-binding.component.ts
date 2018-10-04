import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  data = "KeeRththanan";
  inputData = "";
  hello = "";
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.hello = "Hello there!";
  }

  clearMe(){
    this.hello = "";
  }

}
