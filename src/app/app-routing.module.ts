import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: '', pathMatch: 'full', redirectTo: '/books'},
  {path: 'books/:isbn', component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class WorkshopRoutingModule { }
