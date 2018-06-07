import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  isOpened = false;
  inc() {
    // this.counter += 1;
    // this.counter = this.counter + 1;
    this.counter++;
  }

  toggle() {
    this.isOpened = !this.isOpened;
  }
}
