import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-remember-button',
  templateUrl: './remember-button.component.html',
  styleUrls: ['./remember-button.component.css']
})
export class RememberButtonComponent implements OnInit {

  @Output()
  something = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  tellToParent() {
    this.something.emit();
  }
}
