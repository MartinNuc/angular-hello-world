import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChuckNorrisService } from '../chuck-norris.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  joke: string;

  constructor(public chuckNorris: ChuckNorrisService) {
    this.loadNewJoke();
   }

   loadNewJoke() {
    const randomJoke$ = this.chuckNorris.getRandomJoke();
    randomJoke$.subscribe((response) => {
      this.joke = response.value;
    });
   }

  ngOnInit() {
  }

}
