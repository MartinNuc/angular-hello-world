import { Component, OnInit } from '@angular/core';
import { TimestampService } from '../timestamp.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  name = 'Martin';
  serviceInstance: TimestampService;
  constructor(serviceInstance: TimestampService) {
    this.serviceInstance = serviceInstance;
  }

  ngOnInit() {
  }

  recordTimestamp() {
    // this.serviceInstance.arrayOfTimestamps.push(new Date());
    this.serviceInstance.addNewTimestamp();
  }
}
