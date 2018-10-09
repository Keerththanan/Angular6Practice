import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Data property of the app.component.html
  testData = 'app-component-interaction';
  name = "Kitty";

  message="";
  
}
