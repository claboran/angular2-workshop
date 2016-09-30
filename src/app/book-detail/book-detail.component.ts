import {Component, OnInit, Injectable} from '@angular/core';
import {BookDataService} from "../shared/book-data.service";
import {Book} from "../shared/book";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
@Injectable()
export class BookDetailComponent implements OnInit {

  book: Book = {title: '', author: '', isbn: ''};
  constructor(private route: ActivatedRoute, private bookDataService: BookDataService) { }

  ngOnInit() {
    this.route
      .params
      .subscribe((params) => {
        console.log('params: ', params);
        this.bookDataService.getBooksByIsbn(params['isbn'])
          .subscribe((book: Book) => {
            this.book = book;
          });
      });
  }

}
