import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';
import { Book } from '../model/book';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {
// softeBook:Book[];
softeBook: Observable<Book[]>;
softeBookById: Observable<Book>;
softeBookByIdMap: Observable<string>;
  constructor(private bookservice: BookServiceService) { }

  ngOnInit() {
    this.getBooks();
    console.log('Book data is loaded!');

    setTimeout(() => {
      this.getBooksById();
    }, 10);
    this.getBooksByIdMap();
  }
getBooks() {
  // this.bookservice.getBookFromFakeApi().subscribe(books =>{
  //   this.softeBook = books;   // without async pipe
  this.softeBook = this.bookservice.getBookFromFakeApi(); // with async pipe

  }
  getBooksById() {

    this.softeBookById = this.bookservice.getBookFromFakeApiById(1); // with async pipe id as parameter


    }
    getBooksByIdMap() {

      this.softeBookByIdMap = this.bookservice.getBookFromFakeApiById(1).map(book => book.name); // with async pipe id as parameter


      }
}

