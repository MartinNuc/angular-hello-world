import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  isOpened = false;

  classObject = {
    red: true,
    large: true
  };

  toggleColor() {
    debugger
    this.classObject.red = !this.classObject.red;
  }

  toggleFontSize() {
    this.classObject.large = !this.classObject.large;
  }


  inc() {
    // this.counter += 1;
    // this.counter = this.counter + 1;
    this.counter++;
  }

  toggle() {
    this.isOpened = !this.isOpened;
  }
}
