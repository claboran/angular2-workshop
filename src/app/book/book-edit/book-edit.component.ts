import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/book";

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  public book: Book = {isbn: '', author: '', title: ''};

  constructor() { }

  ngOnInit() {
  }

}
