import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  buttonClicked = false;
  clicks = [];

  buttonClick(){
    this.buttonClicked = !this.buttonClicked;
    this.clicks.push(new Date());
  }

  getClass(i){
    return i > 4 ? 'white-class' : '';
  }

  getColor(i){
    return i > 4 ? 'blue' : 'white';
  }
}
