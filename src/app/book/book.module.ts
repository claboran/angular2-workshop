import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookDataService} from "./shared/book-data.service";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BookRoutingModule} from "./book.routing";
import {ConfirmCandeactivateGuardService} from "./shared/confirm-candeactivate-guard.service";
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BookRoutingModule
  ],
  declarations: [BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent
  ],
  providers: [BookDataService, ConfirmCandeactivateGuardService]
})
export class BookModule { }
