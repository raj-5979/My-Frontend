import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// import { Book } from '../interfaces/book';
import { Observable } from 'rxjs';


// const apiUrl = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})

export class DisplayService {
  private http = inject(HttpClient)
  apiUrl = 'http://localhost:3000';


  constructor() { }

  getBook(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/`);
  }
  addBook(book:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/add-book`,book)
  }
  editBook(BookID: number, book: any): Observable<any>{
    return this.http.put(`${this.apiUrl}/edit-Book/${BookID}`, book);
  }
  deleteBook(BookID: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete-book/${BookID}`);
  }

}
