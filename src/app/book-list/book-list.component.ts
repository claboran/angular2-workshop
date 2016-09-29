import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BookDataService} from "../shared/book-data.service";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  name:           string;
  x:              number;
  y:              number;
  @Input() title: string;
  @Output() titleClicked = new EventEmitter<MouseEvent>();
  books: any;

  constructor(private bookDataService: BookDataService) {
    this.name = 'Christian';
    this.x = 0;
    this.y = 0;
    this.books = bookDataService.getBooks();
  }

  ngOnInit() {
  }

  mouseMove(event: MouseEvent): void {
    this.x = event.offsetX;
    this.y = event.offsetY;
  }

  sendTitleClicked(event: MouseEvent): void {
    this.titleClicked.emit(event);
  }
}
