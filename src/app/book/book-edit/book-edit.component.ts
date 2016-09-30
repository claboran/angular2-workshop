import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/book";
import {ActivatedRoute} from "@angular/router";
import {BookDataService} from "../shared/book-data.service";

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  public book: Book = {isbn: '', author: '', title: ''};

  constructor(private route: ActivatedRoute, private bookDataService: BookDataService) { }

  ngOnInit() {
    this.route
      .params
      .mergeMap((params: {isbn: string}) => this.bookDataService.getBooksByIsbn(params.isbn))
      .subscribe((book: Book) => this.book = book);
  }

  onSubmit(form: any): void {
    console.log('Form: ', form);
  }
}
