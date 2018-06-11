import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  dateEveryTwoSeconds$: Observable<Date>;
  constructor() {
    this.startObservable();
  }

  startObservable() {
    const everyTwoSeconds$ = interval(2000);
    this.dateEveryTwoSeconds$ = everyTwoSeconds$.pipe(
      map(item => new Date())
    );

  }

  ngOnInit() {
  }

}

