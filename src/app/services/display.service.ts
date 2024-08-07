import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})

export class DisplayService {
  private http = inject(HttpClient)

  constructor() { }
  getdisplays(){
    return this.http.get(BASE_URL);
  }
}
