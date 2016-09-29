import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

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

  books = [
    {title: 'Design Patterns', isbn: '978-0-20163-361-0', author: 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides'},
    {title: 'REST und HTTP', isbn: '978-3-86490-120-1', author: 'Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf'},
    {title: 'Eloquent JavaScript', isbn: '978-1-59327-584-6', author: 'Marijn Haverbeke'}
  ];

  constructor() {
    this.name = 'Christian';
    this.x = 0;
    this.y = 0;
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
