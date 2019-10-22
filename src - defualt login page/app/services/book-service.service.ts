import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../model/book';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
bookUrl = '/api/books';
  constructor(private http: HttpClient) { }

 // return array of book methids

 getBookFromFakeApi(): Observable<Book[]> {
return this.http.get<Book[]>(this.bookUrl);
  }

 // using loader base on the id
 getBookFromFakeApiById(id: number): Observable<Book> {
  return this.http.get<Book>(this.bookUrl + '/' + id);
    }
}
