import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  name: string
  x: number;
  y: number;

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
}
