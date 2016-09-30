import {Component, OnInit, Injectable} from '@angular/core';
import {BookDataService} from "../shared/book-data.service";
import {Book} from "../shared/book";
import {ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css']
})
@Injectable()
export class BookDetailComponent implements OnInit {

  book: Book = {title: '', author: '', isbn: ''}; // initialize the book


  constructor(private route: ActivatedRoute, private bookDataService: BookDataService) { }

  ngOnInit() {
    this.route
      .params
      .mergeMap((params: {isbn: string}) => this.bookDataService.getBooksByIsbn(params.isbn))
      .subscribe((book: Book) => this.book = book);
  }

}
