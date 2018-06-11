import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimestampService {
  arrayOfTimestamps: Date[] = [];

  constructor() { }
}
