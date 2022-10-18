import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesServiceService {
  constructor() { }
  generateId(){
    return Date.now().valueOf();
  }
}
