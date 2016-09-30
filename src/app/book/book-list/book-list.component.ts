import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {BookDataService} from "../shared/book-data.service";
import {Book} from "../shared/book";
import {Subscription} from "rxjs";

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  name:           string;
  x:              number;
  y:              number;
  @Input() title: string;
  @Output() titleClicked = new EventEmitter<MouseEvent>();
  books: Book[] = [];
  subscriber: Subscription;

  constructor(private bookDataService: BookDataService) {
  }

  ngOnInit(): void {
    console.log('I am in onInit');
    this.name = 'Christian';
    this.x = 0;
    this.y = 0;
    this.subscriber = this.bookDataService.getBooks().subscribe((books: Book[]) =>  {
      this.books = books;
    });
  }


  mouseMove(event: MouseEvent): void {
    this.x = event.offsetX;
    this.y = event.offsetY;
  }

  sendTitleClicked(event: MouseEvent): void {
    this.titleClicked.emit(event);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
