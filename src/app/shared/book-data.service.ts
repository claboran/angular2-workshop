import { Injectable } from '@angular/core';
import {Book} from "./book";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import parseHttpResponse = http.parseHttpResponse;

@Injectable()
export class BookDataService  {


  constructor(private http: Http) { }

  getBooks(): Observable<Book[]> {
    return this.http.get('http://localhost:4730/books')
      .map(response => response.json());
  }

}
