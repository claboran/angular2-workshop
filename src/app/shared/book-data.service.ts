import { Injectable } from '@angular/core';
import {Book} from "./book";
import {Observable} from "rxjs";

@Injectable()
export class BookDataService  {

  books: Book[] = [ //also possible: Array<Book>
    {title: 'Design Patterns', isbn: '978-0-20163-361-0', author: 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides'},
    {title: 'REST und HTTP', isbn: '978-3-86490-120-1', author: 'Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf'},
    {title: 'Eloquent JavaScript', isbn: '978-1-59327-584-6', author: 'Marijn Haverbeke'}
  ];

  constructor() { }

  getBooks(): Observable<Book[]> {
    return Observable.of(this.books);
  }

}
