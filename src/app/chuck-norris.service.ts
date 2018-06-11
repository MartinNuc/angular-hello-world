import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ItemResponse {
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getRandomJoke() {
    return this.http.get<ItemResponse>('https://api.chucknorris.io/jokes/random');
  }
}
