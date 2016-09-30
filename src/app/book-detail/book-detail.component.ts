import {Component, OnInit, Injectable} from '@angular/core';
import {BookDataService} from "../shared/book-data.service";
import {Book} from "../shared/book";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
@Injectable()
export class BookDetailComponent implements OnInit {

  book: Book;
  constructor(private bookDataService: BookDataService) { }

  ngOnInit() {
    this.book = {title: 'hgjk', isbn: 'ffhgfhg', author: 'ffghfhg'};
  }

}
